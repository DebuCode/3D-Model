# 3D Car Model Viewer

## Project Overview

This project is a 3D Car Model Viewer built with React Three Fiber and @react-three/drei. It allows users to interact with a 3D car model, including hover-based rotation and camera controls.

### 🛠 Features

3D Car Model Rendering: Uses a GLTF model of a car.

Smooth Rotation on Hover: The car rotates when hovered.

Interactive Controls: Allows camera movement with orbit controls.

Performance Optimization: Uses React Suspense for lazy loading.

### 🎥 Live Preview

https://guileless-babka-f8da2a.netlify.app

### 🛠 Installation & Setup

1.Install dependencies:
npm install

2.Start the development server:
npm start

3.Open http://localhost:3000 in your browser

### 📂 File Structure

📁 public
 ├── 📁 models    # Folder containing 3D car model (car.glb)
📁 src
 ├── 📄 Model.js  # The main component rendering the 3D model

🛠️ Dependencies 

React Three Fiber (@react-three/fiber) - For rendering 3D objects in React

Drei (@react-three/drei) - For additional 3D utilities

Install them manually if needed:
npm install @react-three/fiber @react-three/drei

🏗️ How It Works

Loads the 3D model from /models/car.glb

Renders it inside a <Canvas> component

Uses useFrame to rotate the car when hovered

Provides interactive camera movement via <OrbitControls>

🎨 Customization

Change the Model: Replace car.glb with any other .glb file.

Enable Zoom: Set enableZoom={true} in <OrbitControls>.

Adjust Lighting: Modify ambientLight and directionalLight settings.

## 📦 Deployment

This project is hosted on Netlify Pages.

To deploy manually:
npm run build

