import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss'],
})
export class CameraPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  imageElement : any ; 
  photo;
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.base64String ;

    // console.log(imageUrl);
    

    // Can be set to the src of an image now
    // this.imageElement = imageUrl;


    // this.photo = `data:image/png;base64,${this.imageElement}`;

    // console.log(this.photo);

    if(imageUrl){
      this.photo =  'data:image/jpeg;base64,' + imageUrl ;
    }

  };

  




}
