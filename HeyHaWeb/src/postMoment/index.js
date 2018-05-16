import React, {Component} from 'react';
import { Gallery, GalleryDelete, Uploader, Form, Cell, CellBody, ActionSheet, Toast } from 'react-weui';
import 'weui';  
import 'react-weui/build/packages/react-weui.css';
import axios from 'axios';
import 'isomorphic-fetch';

import { Panel, PageTitle, Message } from '../components';
import * as style from './style.scss';
import cemera from './cemera.png';
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
    this.showToast = this.showToast.bind(this);
    this.prePublish = this.prePublish.bind(this);
    this.state = {
      gallery: false,
      actionSheetShow: false,
      fileList: [],
      demoFiles : [
      ],
      toastShow: false,
      showLoading: false
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
    
    if (this.state.content) {
      this.setState({
        showLoading: true
      });
      uploadFiles({
        files: this.state.fileList,
        fileKey: 'file_image',
        data,
        onUploadSuccess: (result)=>{this.props.history.goBack()},
        onUploadFailed: (result)=>{this.showToast('上传失败')}
      });
      return
    }
    this.showToast('请填写完整~');
  }

  publish() {
    const data = {
      clazzId: this.props.match.params.id,
      dataStatus: 'ACTIVE',
      content: this.state.content
    };
    
    if (this.state.content) {
      this.setState({
        showLoading: true
      });
      uploadFiles({
        files: this.state.fileList,
        fileKey: 'file_image',
        data,
        onUploadSuccess: (result)=>{this.props.history.goBack()},
        onUploadFailed: (result)=>{this.showToast('上传失败')}
      });
      return
    }
    this.showToast('请填写完整~');
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

  showToast(msg) {
    this.setState({showToast: true, toastMsg: msg});
    setTimeout(()=> {
      this.setState({showToast: false});
    }, 2000);
  }
  render(){
    const { fileList, showToast, toastMsg, showLoading } = this.state;
    return (
      <div classMoment={style.wrap}>
        <Toast icon="loading" show={showLoading}>发布中</Toast>
        <Message title={toastMsg} visible={showToast} />
        <PageTitle title='发布动态' goBack={this.goBack} />
        <div className={style.panel}>
          {/* <button>add</button> */}
          <Panel>
            <div className={style.imgThumb}>
              {
                fileList.map((item) => (<div><img src={item.uri} alt='' /></div>))
              }
              <div onClick={this.openCamera}><img src={cemera} alt='' /></div>
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
