# Triangulation3DDemo WebGL
## これは何？
- [Triangulation3DDemo](https://github.com/MAAAARCY/Triangulation3dDemo)の完全版です
- React側でUIの制御を、Unity側で3Dモデルの描画を担当しています
- ReactとUnity間で相互にデータのやり取りが可能な[react-unity-webgl](https://react-unity-webgl.dev/)を使用しています

## できること
- 頂点情報が入ったjsonファイルから3Dモデルを生成することができます
<img src="https://github.com/user-attachments/assets/b62d1941-d011-4b24-8caf-d1037e45c8c2" width=700>


## 使い方
1. 描画したい3DモデルをBlenderで作成します
2. Blender上で[頂点情報をjsonファイルに保存するスクリプト](https://gist.githubusercontent.com/MAAAARCY/171e93fe0b19faf30eb7c4338d4c6fe7/raw/b7fc6bc0a859cb0a420ea6ae5415143c14fda89c/obj_to_json.py)を実行します
3. Browse Filesからjsonファイルをアップロードします
   
4. Select Objectにボタンが追加されます
   
<img src="https://github.com/user-attachments/assets/3eceae13-4688-46e2-9dde-c0e79d52dcea" width=500>

5. 追加されたボタンを押すと、Blenderで作成した3Dオブジェクトが描画されます
