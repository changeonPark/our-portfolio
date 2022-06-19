import Lottie from "react-lottie-player"
import lottieJson from '@public/assets/lottie/animation.json'

const Animation = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}

export default Animation
