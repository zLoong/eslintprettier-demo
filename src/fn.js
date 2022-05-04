const buildNewsComponents = () => null;
export const jsonConvertUI = (articleData = {}) => {
  const { vContentField = [], sHtmlContent, bUseHtml, sJsonContent } = articleData;
  let extParams = {};
  let isJsonData = false;
  if (sHtmlContent && bUseHtml) {
    // 内容中心直接下发的html数据"微信公众号这种",目前这种占比较少
    // 正则匹配出视频数据,H5端通过腾讯视频JSSDK进行替换逻辑处理

    const newsHtmlContent = sHtmlContent.replace(/ src=[^/]*\/\/v.qq.com\/iframe.*?"/g, result =>
      result.replace(/ src=/, 'data-vsrc='),
    );
    extParams = {
      bUseHtml,
      sHtmlContent: newsHtmlContent,
      isHtml: true,
    };
  } else if (vContentField.length || sJsonContent) {
    // 内容中心下发json数据
    extParams = {
      sJsonContent,
      isNew: true,
    };
    isJsonData = true;
  }
  const contentFields = buildNewsComponents(vContentField, extParams);
  return {
    isJsonData,
    contentFields,
  };
};
