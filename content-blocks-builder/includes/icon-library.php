<?php
/**
 * The icon library
 *
 * @package   BoldBlocks
 * @author    Phi Phan <mrphipv@gmail.com>
 * @copyright Copyright (c) 2022, Phi Phan
 */

namespace BoldBlocks;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( IconLibrary::class ) ) :
	/**
	 * The controller class for icon library.
	 */
	class IconLibrary extends CoreComponent {
		/**
		 * Run main hooks
		 *
		 * @return void
		 */
		public function run() {
			// Add rest api endpoint to query icon library.
			add_action( 'rest_api_init', [ $this, 'register_icon_library_endpoint' ] );
		}

		/**
		 * Build a custom endpoint to query icon library.
		 *
		 * @return void
		 */
		public function register_icon_library_endpoint() {
			register_rest_route(
				'cbb/v1',
				'/getIconLibrary/',
				array(
					'methods'             => 'GET',
					'callback'            => [ $this, 'get_icon_library' ],
					'permission_callback' => function () {
						return current_user_can( 'publish_posts' );
					},
				)
			);
		}

			/**
			 * Get icon library.
			 *
			 * @param WP_REST_Request $request The request object.
			 * @return void
			 */
		public function get_icon_library( $request ) {
			// icons file path.
			$icons_file = $this->the_plugin_instance->get_file_path( 'data/icon-library/icons.json' );

			// Send the error if the icons file is not exists.
			if ( ! \file_exists( $icons_file ) ) {
				wp_send_json_error( __( 'The icons.json file is not exists.', 'content-blocks-builder' ), 500 );
			}

			// Parse json.
			$icons = wp_json_file_decode( $icons_file, [ 'associative' => true ] );

			// Query svg images from the media library.
			$media_svg_images = $this->query_svg_images();

			if ( $media_svg_images ) {
				$icons = array_merge( $media_svg_images, $icons );
			}

			wp_send_json(
				[
					'data'    => $icons,
					'success' => true,
				]
			);
		}

		/**
		 * Query SVG images from the library
		 *
		 * @return array
		 */
		private function query_svg_images() {
			$media_svgs = [];
			$images     = get_posts(
				[
					'post_type'      => 'attachment',
					'post_mime_type' => [ 'image/svg+xml' ],
					'post_status'    => 'any',
					'posts_per_page' => 100,
				]
			);

			if ( $images ) {
				foreach ( $images as $image ) {
					// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
					$icon = file_get_contents( get_attached_file( $image->ID ) );
					if ( $icon ) {
						$media_svgs[] = [
							'name'       => $image->post_name,
							'title'      => $image->post_title,
							'icon'       => $icon,
							'categories' => [ 'Media Library' ],
							'provider'   => 'Media Library',
						];
					}
				}
			}

			return $media_svgs;
		}

		/**
		 * Sanitize SVG
		 *
		 * @param string $svg
		 * @return string
		 */
		public function sanitize_svg( $svg ) {
			if ( ! is_string( $svg ) ) {
				return '';
			}

			if ( ! preg_match( '/^\s*<svg\b/i', $svg ) ) {
				return '';
			}

			// Hard block dangerous stuff.
			if (
			preg_match(
				'/<(script|iframe|object|embed|foreignObject|image|feImage|use|animate|set)\b/i',
				$svg
			)
			) {
				return '';
			}

			// Remove null bytes.
			$svg = wp_kses_no_null( $svg );

			// Remove event handlers.
			$svg = preg_replace(
				'/\son[a-z-]+\s*=\s*("|\').*?\1/i',
				'',
				$svg
			);

			// Remove href-like attrs.
			$svg = preg_replace(
				'/\s(?:href|xlink:href|src)\s*=\s*("|\').*?\1/i',
				'',
				$svg
			);

			// KSES sanitization.
			$svg = wp_kses(
				$svg,
				$this->get_allowed_svg_tags()
			);

			return trim( $svg );
		}

		/**
		 * Get allowed svg tags and attributes
		 *
		 * @return array
		 */
		private function get_allowed_svg_tags() {
			$global_attrs = [
				// Common.
				'id'                  => true,
				'class'               => true,
				'aria-hidden'         => true,

				// Presentation.
				'clip-path'           => true,
				'clip-rule'           => true,
				'color'               => true,
				'color-interpolation' => true,
				'display'             => true,
				'fill'                => true,
				'fill-opacity'        => true,
				'fill-rule'           => true,
				'mask'                => true,
				'opacity'             => true,
				'pointer-events'      => true,
				'shape-rendering'     => true,
				'stroke'              => true,
				'stroke-dasharray'    => true,
				'stroke-dashoffset'   => true,
				'stroke-linecap'      => true,
				'stroke-linejoin'     => true,
				'stroke-miterlimit'   => true,
				'stroke-opacity'      => true,
				'stroke-width'        => true,
				'transform'           => true,
				'vector-effect'       => true,
				'visibility'          => true,
			];

			$allowed_svg = [
				'svg'            => array_merge(
					$global_attrs,
					[
						'xmlns'               => true,
						'viewbox'             => true,
						'width'               => true,
						'height'              => true,
						'x'                   => true,
						'y'                   => true,
						'preserveaspectratio' => true,
						'name'                => true,
						'role'                => true,
						'focusable'           => true,
						'aria-labelledby'     => true,
					]
				),

				'g'              => $global_attrs,

				'defs'           => [],

				'symbol'         => [
					'id'      => true,
					'viewbox' => true,
				],

				'title'          => [],
				'desc'           => [],

				'path'           => array_merge(
					$global_attrs,
					[
						'd'          => true,
						'pathlength' => true,
					]
				),

				'circle'         => array_merge(
					$global_attrs,
					[
						'cx'         => true,
						'cy'         => true,
						'r'          => true,
						'pathlength' => true,
					]
				),

				'ellipse'        => array_merge(
					$global_attrs,
					[
						'cx'         => true,
						'cy'         => true,
						'rx'         => true,
						'ry'         => true,
						'pathlength' => true,
					]
				),

				'rect'           => array_merge(
					$global_attrs,
					[
						'x'          => true,
						'y'          => true,
						'width'      => true,
						'height'     => true,
						'rx'         => true,
						'ry'         => true,
						'pathlength' => true,
					]
				),

				'line'           => array_merge(
					$global_attrs,
					[
						'x1'         => true,
						'y1'         => true,
						'x2'         => true,
						'y2'         => true,
						'pathlength' => true,
					]
				),

				'polyline'       => array_merge(
					$global_attrs,
					[
						'points'     => true,
						'pathlength' => true,
					]
				),

				'polygon'        => array_merge(
					$global_attrs,
					[
						'points'     => true,
						'pathlength' => true,
					]
				),

				'linearGradient' => [
					'id'                => true,
					'x1'                => true,
					'y1'                => true,
					'x2'                => true,
					'y2'                => true,
					'gradientunits'     => true,
					'gradienttransform' => true,
					'spreadmethod'      => true,
				],

				'radialGradient' => [
					'id'                => true,
					'cx'                => true,
					'cy'                => true,
					'r'                 => true,
					'fx'                => true,
					'fy'                => true,
					'gradientunits'     => true,
					'gradienttransform' => true,
					'spreadmethod'      => true,
				],

				'stop'           => [
					'offset'       => true,
					'stop-color'   => true,
					'stop-opacity' => true,
				],

				'clipPath'       => [
					'id'            => true,
					'clippathunits' => true,
					'transform'     => true,
				],

				'mask'           => [
					'id'               => true,
					'x'                => true,
					'y'                => true,
					'width'            => true,
					'height'           => true,
					'maskunits'        => true,
					'maskcontentunits' => true,
				],

				'pattern'        => [
					'id'               => true,
					'x'                => true,
					'y'                => true,
					'width'            => true,
					'height'           => true,
					'patternunits'     => true,
					'patterntransform' => true,
					'viewbox'          => true,
				],

				'text'           => array_merge(
					$global_attrs,
					[
						'x'              => true,
						'y'              => true,
						'dx'             => true,
						'dy'             => true,
						'textlength'     => true,
						'rotate'         => true,
						'text-anchor'    => true,
						'font-size'      => true,
						'font-family'    => true,
						'font-weight'    => true,
						'letter-spacing' => true,
						'lengthadjust'   => true,
					]
				),

				'tspan'          => [
					'x'              => true,
					'y'              => true,
					'dx'             => true,
					'dy'             => true,
					'text-anchor'    => true,
					'font-size'      => true,
					'font-family'    => true,
					'font-weight'    => true,
					'letter-spacing' => true,
				],
			];

			return apply_filters( 'cbb_get_allowed_svg_tags', $allowed_svg );
		}
	}
endif;
