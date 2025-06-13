# Triangulation3DDemo WebGL
## これは何？
- [Triangulation3D](https://github.com/Synesthesias/Triangulation)のデモアプリです
- React側でUIの制御を、Unity側で3Dモデルの描画を担当しています
- ReactとUnity間で相互にデータのやり取りが可能な[react-unity-webgl](https://react-unity-webgl.dev/)を使用しています

## できること
- 頂点情報が入ったJSONファイルから3Dモデルを生成することができます
<img src="https://github.com/user-attachments/assets/b62d1941-d011-4b24-8caf-d1037e45c8c2" width=700>


## 使い方
1. 描画したい3DモデルをBlenderで作成します
2. Blender上で[頂点情報をJSONファイルに保存するスクリプト](https://gist.githubusercontent.com/MAAAARCY/171e93fe0b19faf30eb7c4338d4c6fe7/raw/b7fc6bc0a859cb0a420ea6ae5415143c14fda89c/obj_to_json.py)を実行します

- 149行目のobj_nameはBlender内のオブジェクト名に適宜変更をお願いします
```python
export_vertex_data_to_json(obj_name="Cup")
```

3. Browse FilesからJSONファイルをアップロードします
   
4. Select Objectにボタンが追加されます
   
<img src="https://github.com/user-attachments/assets/3eceae13-4688-46e2-9dde-c0e79d52dcea" width=500>

5. 追加されたボタンを押すと、Blenderで作成した3Dオブジェクトが描画されます

## 3Dモデルサンプル(JSONファイル)
- リンク先のJSONファイルを投げることで，3Dモデルの生成を体験できます
- [コップ](https://gist.githubusercontent.com/MAAAARCY/e3d13ad842c3028b54f6faac73ebacb4/raw/407b7bb3b8597d8b89457291418a41e603d9ddd7/Cup.json)
- [Blenderのロゴ](https://gist.githubusercontent.com/MAAAARCY/49eb5535edfb98fa0a76c8749372e14a/raw/a8c83c717c05f7eea35198ae3171ef6e44847cff/BlenderLogo)
