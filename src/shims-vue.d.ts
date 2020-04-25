declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module "*.svg" {  //防止import svg时报错
  const content: string;
  export default content;
}