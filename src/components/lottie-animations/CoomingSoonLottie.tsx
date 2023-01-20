import React, { PropsWithChildren } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import animationPath from "../../assets/134364-smarthome-animation-with-lamp.json";

type Props = PropsWithChildren<{}>;
const ComingSoonAnimation = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<div className="mt-6 text-center">
				Cette section est en cours de développement
			</div>

			<Lottie
				animationData={animationPath}
				play
				loop
				style={{ height: "300px" }}
			/>
		</div>
	);
};

export default ComingSoonAnimation;
