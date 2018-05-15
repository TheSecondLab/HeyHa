import React, {Component} from 'react';
import { Gallery, GalleryDelete, Uploader, Form, Cell, CellBody, ActionSheet } from 'react-weui';
import 'weui';  
import 'react-weui/build/packages/react-weui.css';
import axios from 'axios';
import 'isomorphic-fetch';

import { Panel, PageTitle } from '../components';
import * as style from './style.scss';
import photoSrc from './cemera.png';
import thumbSrc from './cemera.png';
import { useCameraToUpload, usePhotoToUpload, uploadFiles } from '../utils/upload';

class PostMoment extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
    this.publish = this.publish.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.useCamera = this.useCamera.bind(this);
    this.usePhoto = this.usePhoto.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.onChooseSuccess = this.onChooseSuccess.bind(this);
    this.state = {
      gallery: false,
      actionSheetShow: false,
      fileList: [],
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

  prePublish() {
    const data = {
      clazzId: this.props.match.params.id,
      dataStatus: 'INACTIVE',
      content: this.state.content
    };

    uploadFiles({
      files: this.state.fileList,
      fileKey: 'file_image',
      data,
      onUploadSuccess: (result)=>{console.log(`success ${result}`)},
      onUploadFailed: (result)=>{console.log(`error ${result}`)}
    });
  }

  publish() {
    const data = {
      clazzId: this.props.match.params.id,
      dataStatus: 'ACTIVE',
      content: this.state.content
    };

    uploadFiles({
      files: this.state.fileList,
      fileKey: 'file_image',
      data,
      onUploadSuccess: (result)=>{console.log(`success ${result}`)},
      onUploadFailed: (result)=>{console.log(`error ${result}`)}
    });
  }

  openCamera() {
    this.setState({
      actionSheetShow: true
    })
  }

  onChooseSuccess(fileData) {
    console.log(`uuuu: ${fileData.uri}`);
    this.setState({
      actionSheetShow: false,
      fileList: this.state.fileList.concat(fileData)
    });
  }

  useCamera() {
    useCameraToUpload(this.onChooseSuccess, () => {});
  }

  usePhoto() {
    usePhotoToUpload(this.onChooseSuccess, () => {});
  }

  onCancel() {
    this.setState({actionSheetShow: false})
  }

  contentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  render(){
    return (
      <div classMoment={style.wrap}>
        <PageTitle title='发布动态' goBack={this.goBack} />
        <div className={style.panel}>
          <button onClick={this.openCamera}>add</button>
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
                      onChange={() => {}}
                      lang={{
                        maxError: maxCount => `Max ${maxCount} images allow`
                      }}
                    />
                  </CellBody>
                </Cell>
              </Form>
            </div>
            <div className={style.textarea}>
              <textarea rows='5' placeholder='说点什么吧...' onChange={this.contentChange}>{this.state.content}</textarea>
            </div>
            <div className={style.btnWrap}>
              <div className={style.light} onClick={this.prePublish}>稍后再发</div>
              <div className={style.dark} onClick={this.publish}>立即发布</div>
            </div>
          </Panel>
        </div>
        <ActionSheet
          show={ this.state.actionSheetShow }
          onRequestClose={
            e => this.setState({ show: false })
          }
          menus={[{
            label: '使用照相机',
            onClick: this.useCamera
          }, {
            label: '从相册中选取',
            onClick: this.usePhoto
          }, {
            label: '取消',
            onClick: this.onCancel
          }]}
        />
      </div>
    );
  }
}

export default PostMoment;
