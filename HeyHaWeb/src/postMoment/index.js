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
    this.state = {
      gallery: false,
      demoFiles : [
        {
          url: thumbSrc,
        },
        {
          url: photoSrc
        },
        {
          url: thumbSrc
        },
        {
          url: photoSrc,
          error: true
        },
        {
          url: thumbSrc,
          status: '50%'
        }
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
                maxCount={6}
                files={this.state.demoFiles}
                onError={msg => alert(msg)}
                onChange={(file,e) => {
                  let newFiles = [...this.state.demoFiles, {url:file.data}];
                  this.setState({
                      demoFiles: newFiles
                  });
                }}
                onFileClick={
                  (e, file, i) => {
                    console.log('file click', file, i)
                    this.setState({
                      gallery: {
                          url: file.url,
                          id: i
                      }
                    })
                  }
                }
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
               <div className={style.light}>稍后再发</div>
               <div className={style.dark}>立即发布</div>
             </div>
           </Panel>
         </div>
       </div>
      
    );
  }
}

export default PostMoment;
