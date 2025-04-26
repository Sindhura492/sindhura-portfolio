import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { useMemo } from "react";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "dance", ...props }) => {
	const group = useRef();

	const { scene } = useGLTF("/models/developer.glb");
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);

	const { animations: danceAnimation } = useFBX("/models/animations/dance.fbx");
	// const { animations: saluteAnimation } = useFBX(
	// 	"/models/animations/salute.fbx",
	// );
	// const { animations: clappingAnimation } = useFBX(
	// 	"/models/animations/clapping.fbx",
	// );
	// const { animations: victoryAnimation } = useFBX(
	// 	"/models/animations/victory.fbx",
	// );

	danceAnimation[0].name = "dance";
	// saluteAnimation[0].name = "salute";
	// clappingAnimation[0].name = "clapping";
	// victoryAnimation[0].name = "victory";

	const { actions } = useAnimations(
		[
			danceAnimation[0],
			// saluteAnimation[0],
			// clappingAnimation[0],
			// victoryAnimation[0],
		],
		group,
	);

	useEffect(() => {
		actions[animationName].reset().fadeIn(0.5).play();
		return () => actions[animationName].fadeOut(0.5);
	}, [animationName]);
	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_2.geometry}
					material={
						materials["Wolf3D_Body_d7fead96-3e8d-4fd5-b60d-7f3d424e7cf0"]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_3.geometry}
					material={
						materials["Wolf3D_Hair_27432ca9-200b-412a-9834-68235393b1b6"]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={
						materials[
							"Wolf3D_Outfit_Bottom_c92950e4-152d-43f9-a611-e87b7a2f7362"
						]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={
						materials[
							"Wolf3D_Outfit_Footwear_de9a4da9-faed-4fb7-bb2a-22181b917755"
						]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_6.geometry}
					material={
						materials["Wolf3D_Outfit_Top_8e4a01da-2333-4c69-b7ef-0632843c54e8"]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_7.geometry}
					material={
						materials["Wolf3D_Skin_a9d336bc-6c17-412a-8d55-3df47a094e41"]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_8.geometry}
					material={
						materials["Wolf3D_Teeth_3711d214-8761-4583-8c7e-e1ac75805aa6"]
					}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_9.geometry}
					material={
						materials["Wolf3D_Eye_db027649-32a9-4028-ad60-ae6350c1995a"]
					}
				/>
			</group>
		</group>
	);
};

useGLTF.preload("/models/developer.glb");

export default Developer;
