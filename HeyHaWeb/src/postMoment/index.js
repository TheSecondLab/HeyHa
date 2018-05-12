import React, {Component} from 'react';
import { Gallery, GalleryDelete, Uploader, Form, Cell, CellBody } from 'react-weui';
import 'weui';  
import 'react-weui/build/packages/react-weui.css';

import { Panel, PageTitle } from '../components';
import * as style from './style.scss';
import photoSrc from './cemera.png';
import thumbSrc from './cemera.png';

class PostMoment extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
    this.test = this.test.bind(this);
    this.publish = this.publish.bind(this);
    this.state = {
      gallery: false,
      demoFiles : [
      ]
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  renderGallery(){
    if(!this.state.gallery) return false;
    let srcs = this.state.demoFiles.map(file=>file.url)

    return (
      <Gallery
        src={srcs}
        show
        defaultIndex={this.state.gallery.id}
        onClick={ e=> {
          //avoid click background item
          e.preventDefault()
          e.stopPropagation();
          this.setState({gallery: false})
        }}
      >
        <GalleryDelete onClick={ (e, id)=> {
          this.setState({
            demoFiles: this.state.demoFiles.filter((e,i)=>i != id),
            gallery: this.state.demoFiles.length <= 1 ? true : false
          })
        }} />

      </Gallery>
    )
  }

  test() {
    const cameraOptions = {
      quality: 50,
      // destinationType: this.platform.is('ios') ? this.camera.DestinationType.NATIVE_URI : this.camera.DestinationType.FILE_URI,
      destinationType: 1,
      encodingType: 0,
      mediaType: 0,
      sourceType: 0
    };
    // const cameraSuccess = (imageData) => {
    //   // let newFiles = [...this.state.demoFiles, {url:imageData}];
    //   // this.setState({
    //   //     demoFiles: newFiles
    //   // });

    //   this.transform(imageData);
    // }
    const cameraError = (err) =>{conosle.log(err)}
    navigator.camera.getPicture(this.transform, cameraError, cameraOptions);
  }

  transform(imageData) {
    window.resolveLocalFileSystemURL(imageData, function(fileEntry) {  
      fileEntry.file(function(file) {  
          const reader = new FileReader();  
          reader.onloadend = function(e) {   
              const the_file = new Blob([e.target.result ], { type: "image/jpeg" } );  
              let newFiles = [...this.state.demoFiles, {url:imageData, data: the_file, name:file.name}];
              this.setState({
                  demoFiles: newFiles
              });
          };  
          reader.readAsArrayBuffer(file);  
        }, function(e){()=> {}});  
      }, function(e){()=>{}});  
  }

  publish() {
    this.formData = new FormData();
    const { demoFiles } = this.state;
    
    const imgArr = demoFiles.map((file) => {
      return new Promise((resolve, reject) => {
        window.resolveLocalFileSystemURL(file.url, entry => {
          entry.file(file => {
            let blob = file;
            const reader = new FileReader();
              reader.onloadend = () => {
                const imgBlob = new Blob([reader.result], {type: blob.type});
                console.log('blob', imgBlob)
                this.formData.append('file_image', imgBlob, blob.name);
                resolve();
              };
              reader.readAsArrayBuffer(blob);
            });
          })
      });
    })

    Promise.all(imgArr).then(data=> {console.log('adbgg, '+JSON.stringify(this.formData.getAll('file_image')))})
  }

  render(){
    return (
      <div classMoment={style.wrap}>
         <PageTitle title='发布动态' goBack={this.goBack} />
         <div className={style.panel}>
           <Panel>
           <div>
        { this.renderGallery() }
        <Form>
          <Cell>
            <CellBody>
              <Uploader
                title="Image Uploader"
                maxCount={3}
                files={this.state.demoFiles}
                onError={msg => alert(msg)}
                onChange={(file,e) => {
                  console.log('13')
                  let newFiles = [...this.state.demoFiles, {url:file.data}];
                  this.setState({
                      demoFiles: newFiles
                  });
                }}
                // onFileClick={
                //   (e, file, i) => {
                //     console.log('file click', file, i)
                //     this.setState({
                //       gallery: {
                //           url: file.url,
                //           id: i
                //       }
                //     })
                //   }
                // }
                lang={{
                  maxError: maxCount => `Max ${maxCount} images allow`
                }}
              />
            </CellBody>
          </Cell>
        </Form>
      </div>
             <div className={style.textarea}>
               <textarea rows='5' placeholder='说点什么吧...' >
  
               </textarea>
             </div>
             <div className={style.btnWrap}>
               <div className={style.light} onClick={this.test}>稍后再发</div>
               <div className={style.dark} onClick={this.publish}>立即发布</div>
             </div>
           </Panel>
         </div>
       </div>
      
    );
  }
}

export default PostMoment;
