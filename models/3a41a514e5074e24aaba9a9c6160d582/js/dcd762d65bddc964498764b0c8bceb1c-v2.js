"use strict";(self.webpackChunksketchfab=self.webpackChunksketchfab||[]).push([[1287],{a261:e=>{e.exports=JSON.parse('{"allow_swift_shader":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Allow swift shader software rendering."},"animation_autoplay":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Automatically play animations when the viewer starts."},"anisotropy":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"If we activate anisotropy when trilinear is chosen."},"annotation":{"type":"number","defaultValue":0,"values":"[1, 50]","share":"public","help":"Setting to [1, 50] will automatically load that annotation when the viewer starts."},"annotation_cycle":{"type":"number","defaultValue":null,"values":"+X","share":"public","help":"Setting to any number will start the Autopilot cycle with that duration, in seconds, at each annotation."},"annotations_visible":{"type":"bool","defaultValue":null,"values":"0, 1","share":"public","help":"Setting to 0 will hide annotations by default."},"annotation_tooltip_visible":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","help":"Setting to 0 will hide annotations tooltip by default."},"api_hook_env":{"type":"string","defaultValue":null,"values":"prod, dev, staging, local","share":"private","help":"Viewer Api Debug."},"api_log":{"type":"bool","defaultValue":null,"values":"0, 1","share":"public","help":"Viewer Api helper for user."},"api_version":{"type":"string","defaultValue":null,"values":"string","share":"private","help":"The version of the viewer API."},"arkit":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Initialize the viewer in ARKit mode"},"arkit_debug":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Enter in debug mode for ar to debug in a desktop browser"},"async_image":{"type":"bool","defaultValue":false,"values":"0, 1","share":"shared","help":"Loads png and jpg in asynchronous (memory overhead for now so disabled by default)."},"async_shader":{"type":"number","defaultValue":1,"values":"+X","share":"shared","help":"Compile Shaders asynchronously, specify number of frame waiting for compilation, 0 to disable, 1 to enable"},"auto_material":{"type":"bool","defaultValue":0,"values":"0, 1","share":"private","help":"Select material on hover in inspector split."},"autospin":{"type":"number","defaultValue":0,"values":"+/-X","share":"public","help":"Setting to any number will cause the model to automatically spin around the z-axis after loading. The greater the number, the faster the spin. A negative number will reverse the spin direction."},"autostart":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"Setting to 1 will make the model load immediately once the page is ready, rather than waiting for a user to click the Play button."},"camera":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","help":"Setting to 0 will skip the initial animation that occurs when a model is loaded, and immediately show the model in its default position."},"camera_constraints":{"type":"bool","defaultValue":true,"values":"0, 1","share":"shared","help":"Enable / Disable camera limits"},"camera_easing":{"type":"number","defaultValue":null,"values":"0..1","share":"private","help":"0 means no easing."},"camera_eye":{"type":"vec3","defaultValue":null,"values":"X,Y,Z","share":"private","help":"Forces position of the camera."},"camera_follow_bones":{"type":"number","defaultValue":0,"values":"0, 1, 2","share":"private","help":"1: translate eye 2: focus eye. You need to double-click the model on an animated part first."},"camera_target":{"type":"vec3","defaultValue":null,"values":"0, 1","share":"private","help":"Forces the target of the camera."},"cardboard":{"type":"number","defaultValue":0,"values":"0, 1, 2","share":"public","help":"Start in VR Mode automatically."},"carmel":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"If we are in the carmel context."},"clean_shader":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Pre-process the shader to resolve the define statement."},"continuous_render":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Redraw continuously."},"convert_vertex_color_8bit":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Converts vertex color in 8bit."},"debug3d":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Open a dat.gui panel to debug 3d stuffs."},"debugDecals":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Enable decals debugging in the viewer API (click on mouse wheel to create a decal)"},"depth_mipmap":{"type":"bool","defaultValue":0,"values":"+X","share":"private","help":"Uses depth mipmap."},"dnt":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"Disable tracking any session data, including all cookies and analytics. "},"dof_attenuate_distance":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Attenuates dof effect when we unzoom."},"dof_attenuate_speed":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Attenuates dof effect when we move the camera."},"dof_circle":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","help":"Shows dof focus point as cirle."},"dof_res":{"type":"number","defaultValue":2,"values":"+X","share":"private","help":"Resolution divider of dof postprocess (2 means half resolution)."},"dof_sticky":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"If the dof focus point sticks on the same place."},"dof_transition":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"If there is a transition when changing the dof focus point."},"double_click":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"pro","help":"If we allow double-click (focus constraint)."},"download_picture":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Download the thumbnail on Save View."},"drs":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Enables dynamic resolution scaling."},"drs_ratio":{"type":"number","defaultValue":1,"values":"+X","share":"private","help":"Speeds at which we reduce the resolution."},"drs_fps":{"type":"number","defaultValue":15,"values":"0..1","share":"private","help":"Minimum before reducing the resolution."},"drs_min":{"type":"number","defaultValue":null,"values":"0..1","share":"private","help":"Minimum resoluton rate allowed, by default value is (1.0 / canvasPixelRatio)."},"drs_test":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Alternates between 2 drs values (for debugging purpose)."},"epsilon_alpha":{"type":"number","defaultValue":0.00001,"values":"0..1","share":"private","help":"GPU workaround bug with epsilon alpha discard threshold."},"float_rtt":{"type":"number","defaultValue":2,"values":"0, 1, 2","share":"private","help":"0 : force 8bit, 1 force float if supported, 2 : depends (dynamic)."},"force_controller":{"type":"string","defaultValue":"","values":"vive, daydream, oculus, windows, magicleap","share":"private","help":"Force display of controller (debug)."},"force_controller_orientation":{"type":"number","defaultValue":-0.5,"values":"-2..2","share":"private","help":"Rotates the controller when set: -2 is -2PI, 2 is 2PI"},"force_controller_ray_orientation":{"type":"number","defaultValue":-0.075,"values":"-2..2","share":"private","help":"Rotates the teleport ray when set: -2 is -2PI, 2 is 2PI"},"force_fallback":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Forces display of the Fallback."},"force_ms":{"type":"number","defaultValue":0,"values":"+X","share":"private","help":"Forces framerate with a setTimeout (in ms, 0 means requestAnimationFrame)."},"force_triangles":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Forces merge of TRIANGLE and TRIANGLE_STRIP."},"fps_speed":{"type":"number","defaultValue":5,"values":"+X","share":"public","help":"Set the default walk speed in First-Person."},"fxaa":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Uses fxaa."},"grain_speed":{"type":"number","defaultValue":64,"values":"+X","share":"private","help":"Grain animation speed, in ms."},"graph_optimizer":{"type":"bool","defaultValue":null,"values":"+X","share":"private","help":"Optimizes mesh (merge and bake geometries, etc), disabled by default in some cases (editor, api, processing)."},"image_compression":{"type":"bool","defaultValue":null,"values":"0, 1","share":"shared","help":"Use the full resolution, original textures (false in editor, true in viewer)."},"internal":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Allows us to use limited parameters on whitelisted domains (e.g. hide the watermark on sketchfab.com)."},"is_app":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"If we are in the mobile app context."},"keep_empty_geometries":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"If we want to keep the empty geometries in the scene graph instead of removing them."},"material_ao":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override ao channel for material given by material_names option."},"material_cavity":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override cavity channel for material given by material_names option."},"material_diffuse":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override diffuse channel for material given by material_names option."},"material_displacement":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override displacement channel for material given by material_names option."},"material_displacement_factor":{"type":"number","defaultValue":null,"values":"+X","share":"private","help":"override displacement factor channel for material given by material_names option."},"material_emissive":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override emissive channel for material given by material_names option."},"material_f0":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override f0 channel for material given by material_names option."},"material_glossiness":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override glossiness channel for material given by material_names option."},"material_metalness":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override metalness channel for material given by material_names option."},"material_names":{"type":"string","defaultValue":"main_material","values":"0, 1","share":"private","help":"Multiple names are separated with ; For example material_names=mat1;mat2."},"material_normal":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override normal channel for material given by material_names option."},"material_packing":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Pack texture materials."},"material_roughness":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override roughness channel for material given by material_names option."},"material_showcase":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Enables material showcase."},"material_specular":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override specular channel for material given by material_names option."},"material_transparency":{"type":"string","defaultValue":null,"values":"0, 1","share":"private","help":"override opacity channel for material given by material_names option."},"max_texture_units":{"type":"number","defaultValue":32,"values":"+X","share":"private","help":"Sets maximum count of texture units."},"max_device_pixel_ratio":{"type":"number","defaultValue":1.5,"values":"+X","share":"public","help":"Sets maximum device pixel ratio we do allow, -1 to remove any limit"},"max_texture_size":{"type":"number","defaultValue":8192,"values":"+X","share":"private","help":"All texture capped at that texture size."},"max_vertex_uniforms":{"type":"number","defaultValue":8192,"values":"+X","share":"private","help":"Sets max vertex uniform."},"merge_materials":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Merge similar materials."},"messaging":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private"},"model":{"type":"string","defaultValue":null,"values":"uid","share":"UID of model to hook."},"model_optimization":{"defaultValue":null,"help":"Use the unoptimized editor build.","share":"private","type":"bool","values":"0, 1"},"morph_epsilon":{"defaultValue":0.05,"help":"Epsilon to limit the number of interpolated morph targets per frame.","share":"private","type":"number","values":"+X"},"morph_gpu":{"defaultValue":4,"help":"Maximum morph gpu allowed (rest is done on the cpu), minimum value is 1.","share":"private","type":"number","values":"[1, +X]"},"navigation":{"type":"string","defaultValue":"orbit","values":"orbit, fps","share":"public","help":"Choose between fps and orbit mode."},"orbit_constraint_pan":{"type":"bool","defaultValue":null,"values":"0, 1","share":"public","limited_to":"pro","help":"Disable panning"},"orbit_constraint_pitch_down":{"type":"number","defaultValue":null,"values":"[-PI/2, PI/2]","share":"public","limited_to":"pro","help":"Pitch down limit."},"orbit_constraint_pitch_up":{"type":"number","defaultValue":null,"values":"[-PI/2, PI/2]","share":"public","limited_to":"pro","help":"Pitch up limit."},"orbit_constraint_yaw_left":{"type":"number","defaultValue":null,"values":"[-PI, PI]","share":"public","limited_to":"pro","help":"Yaw left limit."},"orbit_constraint_yaw_right":{"type":"number","defaultValue":null,"values":"[-PI, PI]","share":"public","limited_to":"pro","help":"Yaw right limit."},"orbit_constraint_zoom_in":{"type":"number","defaultValue":null,"values":"+X","share":"public","limited_to":"pro","help":"Zoom in limit."},"orbit_constraint_zoom_out":{"type":"number","defaultValue":null,"values":"+X","share":"public","limited_to":"pro","help":"Zoom out limit."},"orbit_pan_factor":{"type":"number","defaultValue":1,"values":"+X","share":"public","help":"A factor to control the camera pan speed."},"orbit_rotation_factor":{"type":"number","defaultValue":1,"values":"+X","share":"public","help":"A factor to control the camera rotation speed."},"orbit_zoom_factor":{"type":"number","defaultValue":1,"values":"+X","share":"public","help":"A factor to control the camera zoom speed."},"panorama":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Uses panorama hdr instead of cubemap."},"pixel_budget":{"type":"number","defaultValue":null,"values":"+X","share":"private","help":"x is nb of pixel (e.g 4096)."},"pratio":{"type":"number","defaultValue":null,"values":"+X","share":"private","help":"For debugging, same as osgjs overrideDevicePixelRatio (but shorter)."},"post_process":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"If postprocess filters are enabled."},"post_process_ascii":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"If postprocess ascii filter is enabled."},"power_preference":{"type":"string","defaultValue":"high-performance","values":"default|low-power|high-performance","share":"private","help":"Hint for gpu (power battery vs performance). Setting high-performance might be unsafe (context lost), so be wary."},"preload":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"Download all textures before displaying the model."},"preserve_drawing_buffer":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"WebGL canvas option."},"prevent_user_light_rotation":{"type":"bool","defaultValue":null,"values":"0, 1","share":"public","limited_to":"pro","help":"Disable light and environment rotation"},"process_material":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Reprocess materials."},"process_options":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Reprocess all the options (same as a reupload without backend reprocessing)."},"quality":{"type":"number","defaultValue":null,"values":"+X","share":"private","help":"Quality of viewer (null means it depends of the fps), for now it only impacts a few postprocesses."},"refraction_res":{"type":"number","defaultValue":1,"values":"+X","share":"private","help":"Resolution divider of refraction texture (2 means half resolution)."},"resize_timeout":{"type":"number","defaultValue":1000,"values":"+X","share":"shared","help":"Resize timeout when the size is stable (in ms)."},"rgbm":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"For quick visual framebuffer debugging (spectorjs)."},"scale":{"type":"number","defaultValue":1,"values":"+X","share":"private","help":"Scale the scene (DEBUG only)."},"scale_epsilon":{"type":"number","defaultValue":0.00001,"values":"+X","share":"private","help":"Epsilon used to drop rendering of small matrixTransform/geometries (DEBUG only)."},"scrollwheel":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","help":"Disable zooming with scrollwheel (Ctrl+Click/drag still zooms)."},"shadow":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"enable shadow"},"shadow_atlas":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"enable shadow atlas."},"shadow_jitter_offset":{"type":"string","defaultValue":"default","values":"default, none","share":"private","help":"If we use jitter offset shadow."},"shadow_normal_offset":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"If we use normal offset shadow bias."},"shadow_PCF":{"type":"string","defaultValue":"1Tap(4texFetch)","values":"1Tap(4texFetch), 4Tap(16texFetch), 9Tap(36texFetch), 16Tap(64texFetch)","share":"private","help":"Shadow attempt to fight aliasing complex settings."},"shadow_texture_size":{"type":"number","defaultValue":1024,"values":"+X","share":"private","help":"Size of shadowmaps."},"share":{"type":"bool","defaultValue":false},"single_sided":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Force single sided (or double sided) on all material"},"snap_keyframe":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Snap on keyframes."},"sound_enable":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Enables the sound feature"},"sound_mute":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Mute any sound"},"sound_preload":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Preloads the sounds"},"split_limit":{"type":"number","defaultValue":65535,"values":"+X","share":"private","help":"Graph optimizer split limit"},"ssao_normal":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"DEBUG ONLY! otherwise needs mrt."},"ssr":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Forces screen space reflection."},"ssr_transparent":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Enables SSR on transparent material (additive/blending/refraction)."},"sss_jitter":{"type":"number","defaultValue":1,"values":"[0, 1]","share":"private","help":"SSS jitter force ."},"sss_kernel":{"type":"number","defaultValue":17,"values":"11, 17, 25","share":"private","help":"Kernel size for diffuse kernel scattering."},"stats":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"OSGJS option to display stats"},"svg_size":{"type":"number","defaultValue":2048,"values":"+X","share":"private","help":"Default svg size."},"substance_displacement":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Moves vertices in y dimension only (displacement map)."},"supersample":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"If accumulation supersample is enabled or not."},"tracking":{"type":"bool","defaultValue":true,"limited_to":"staff"},"taa":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Forces disabling/enabling of Temporal Anti-Aliasing."},"taa_animation":{"type":"bool","defaultValue":false,"values":"[0, 1]","share":"private","help":"If we allow taa while an animation is playing."},"taa_feedback_max":{"type":"number","defaultValue":0.97,"values":"[0, 1]","share":"private","help":"Feedback controls how much the current and the previous frames are blended together. The blending is done within the [min,max] range."},"taa_feedback_min":{"type":"number","defaultValue":0.88,"values":"[0, 1]","share":"private","help":"Feedback controls how much the current and the previous frames are blended together. The blending is done within the [min,max] range."},"taa_jitter":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Enable/Disable jittering when not supersampling."},"taa_transparent":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Enables taa on transparent objects."},"tab":{"type":"string","defaultValue":null,"values":"scene, lighting, materials, post processing filters, annotations, animation, virtual reality, sound","share":"private","help":"Default tab opening in the editor (note: the web is not using getOptions, the entry is here for documentation only)."},"texture_frame_budget":{"type":"number","defaultValue":512,"values":"+X","share":"private","help":"x is nb of pixel, Frame texture budget upload/allocation per frame."},"transparent":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","limited_to":"pro","help":"Makes the background transparent."},"ui_animations":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide Animation menu / timeline."},"ui_annotations":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide Annotation menu / controls."},"ui_ar":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide View in AR button."},"ui_ar_help":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide Help link in AR popup on desktop."},"ui_ar_qrcode":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide the QRCode in the AR popup on desktop."},"ui_color":{"type":"color","defaultValue":"","values":"","share":"private","limited_to":"prem","help":"The primary color of the ui."},"ui_controls":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide help, Settings, VR, Fullscreen."},"ui_fadeout":{"type":"bool","defaultValue":true,"limited_to":"prem"},"ui_fullscreen":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide Fullscreen button."},"ui_general_controls":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide all viewer controls."},"ui_help":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide help button."},"ui_hint":{"type":"number","defaultValue":1,"values":"0, 1, 2","share":"public","limited_to":"prem","help":"Hide or force viewer hint."},"ui_infos":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","alias":["desc_button"],"help":"Hide top info bar."},"ui_inspector":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","limited_to":"prem","help":"Show model inspector."},"ui_inspector_open":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Show model inspector open on start."},"ui_loading":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide loading bars"},"ui_settings":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide Settings button."},"ui_snapshots":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"Show Save View button."},"ui_sound":{"type":"bool","defaultValue":true,"limited_to":"prem"},"ui_start":{"type":"bool","defaultValue":true,"values":"0, 1","limited_to":"prem","help":"Hide start button."},"ui_stop":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","alias":["stop_button"],"help":"Hide Stop Viewer button. "},"ui_theatre":{"type":"bool","defaultValue":false,"limited_to":"prem"},"ui_theme":{"type":"string","defaultValue":null,"values":"dark","share":"public","help":"Apply a darker appearance to the UI."},"ui_vr":{"type":"bool","defaultValue":true,"values":"0, 1","share":"public","limited_to":"prem","help":"Hide View in VR button."},"ui_watermark":{"type":"bool","defaultValue":true,"alias":["watermark"],"limited_to":"prem","help":"Disable watermark when false."},"ui_watermark_link":{"type":"bool","defaultValue":true,"limited_to":"prem","help":"Disable link in watermark when false."},"unit_render_local":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Uses for unit render test."},"unit_render_reporter":{"type":"string","defaultValue":"html","values":"console, html","share":"private","help":"To run 1 uid in /tests/screenshot"},"unit_render_task":{"type":"number","defaultValue":null,"values":"index","share":"private","help":"To run only one test in /tests/screenshot"},"use_vao":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"If we use the VAO gl extension."},"varying_sorting":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Hack because of earlyz (bug gpu)."},"vr_ar":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"transparent background and no floor (to test)"},"vr_browser_env":{"type":"string","defaultValue":"c0022acc4f3242e2bcae8043e08df8cc","values":"uid","share":"private","help":"Model UID of the environment model for the vr browse."},"vr_fade":{"type":"number","defaultValue":200,"values":"+X","share":"private","help":"Fade time of the black transition in vr."},"vr_launcher_alpha_card_factor":{"type":"number","defaultValue":1,"values":"+X","share":"private","help":"Alpha card factor."},"vr_mirror":{"type":"bool","defaultValue":false,"values":"0, 1","share":"public","help":"Copy VR headset view on desktop screen."},"vr_mobile_max_faces":{"type":"number","defaultValue":50000,"values":"+X","share":"public","help":"Filter the fetched models in vr on mobile to those with a face count below the value"},"vr_quality":{"type":"number","defaultValue":null,"values":"+X","share":"public","help":"Sets vr quality ratio, shortcut for &vr_scale_rtt=1&max_device_pixel_ratio=X&pratio=X, 1.5 medium, 2.5 high, 3.5 very high (need good gpu)"},"vr_generate_ui_textures":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Set to false to disable the UI texture generation in VR (fallback for ios app)"},"vr_force_raf":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"Debug only (force replacement of native raf with hmd raf)."},"vr_link_navigation":{"type":"bool","defaultValue":0,"values":"0, 1","share":"private","help":"1 means the vr launcher use standards link navigation to navigate in VR."},"vr_in_navigation":{"type":"bool","defaultValue":0,"values":"0, 1","share":"private","help":"1 means browser is in vr."},"vr_scale_rtt":{"type":"number","defaultValue":0,"values":"+X","share":"private","help":"If not 0, it will scale the size of te recommended vr renderTarget."},"vr_max_rtt_size":{"type":"number","defaultValue":null,"values":"+X","share":"public","help":"If not null, it will limit the rtt size"},"vr_stereo":{"type":"bool","defaultValue":true,"values":"0, 1","share":"private","help":"Mostly for debugging vr on desktop: disable stereo view in vr context."},"webgl2":{"type":"bool","defaultValue":true,"values":"0, 1","share":"shared","help":"Uses webgl2 instead of webgl1 if provided."},"webgl_ext":{"type":"bool","defaultValue":true,"share":"private","help":"when false, disables any webgl extensions."},"webgl_render_texture":{"type":"string","defaultValue":null,"values":"none, float, float_linear, half_float,half_float_linear","share":"private","help":"only allow up to the format"},"webgl_restore":{"type":"number","defaultValue":3,"values":"+X","share":"private","help":"when 0, enables webgl restore on other browser than Edge."},"webgl_timer_gpu":{"type":"bool","defaultValue":false,"values":"0, 1","share":"private","help":"when false, disables gpu timer queries for cleaner gl traces."},"webgl_uniforms":{"type":"bool","defaultValue":false,"share":"private","help":"artificially limits to 64 uniform."},"wireframe_preload":{"type":"bool","defaultValue":null,"values":"0, 1","share":"private","help":"Forces wireframe preload."},"zoct":{"type":"bool","defaultValue":false,"staff_only":true,"help":"octahedral encoding"},"zq":{"type":"bool","defaultValue":true,"staff_only":true,"help":"16 bit quantization for *vertex* (false means float)"},"zw":{"type":"bool","defaultValue":true,"staff_only":true,"help":"use 4th component for lossless antirip"},"zratio":{"type":"number","defaultValue":50,"staff_only":true,"help":"ratio test when we merge 2 geoms that have 2 very different boxes (far apart / different size). smaller value = more chance to disable quantiz"},"zz":{"type":"bool","defaultValue":null,"staff_only":true,"help":"use compression"}}')}}]);