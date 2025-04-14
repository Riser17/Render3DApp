import { FilamentScene, FilamentView, DefaultLight, Model, Camera } from "react-native-filament";
import AssetPath from './buster_drone.glb';

function MyScene() {
  return (
    <FilamentScene>

      {/* 🏞️ A view to draw the 3D content to */}
      <FilamentView style={{ flex: 1 }}>

          {/* 💡 A light source, otherwise the scene will be black */}
          <DefaultLight />

          {/* 📦 A 3D model */}
          <Model source={AssetPath} transformToUnitCube/>

          📹 A camera through which the scene is observed and projected onto the view
          <Camera />

      </FilamentView>
    </FilamentScene>
  );
}

export default MyScene;