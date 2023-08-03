interface Video {

  created: string,
  mid: number,
  name: string,
  field_tags: string,
  thumbnail__target_id: string,
  user_picture: string,
  uid: number,
  field_categorias: string,
  field_channel: string,
  field_user_photo: string,
  field_media_oembed_video: string,
  field_media_duration: string,
  field_media_description: string,
  nid: number,

}

const videos: Video[] = [];

export default videos;

export {Video, videos};

