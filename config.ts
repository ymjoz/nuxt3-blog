export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: "ymjoz",                                     // 必须修改，github账户名



  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: "kamitom ymjoz",                                        // 网站标题
  nickName: "水火bu蓉",                                          // 昵称
  domain: "https://blog.yunyuyuan.net",                        // rss域名
  SEO_title: " - kamitom blog",                              // 搜索引擎显示的标题
  SEO_keywords: "kamitom,kamitom's blog,水火bu蓉,水火bu蓉的博客", // keywords meta header
  MSClarityId: "",                                             // Microsoft的Clarity统计，https://clarity.microsoft.com/
  CloudflareAnalyze: "",                                       // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "",                                           // https://giscus.app/zh-CN
  CommentDiscussionCategoryId: "",                             // https://giscus.app/zh-CN

  MongoDb: {                                                   // 浏览量统计，请先设置 https://vercel.com/integrations/mongodbatlas
    database: "nuxt3-blog",
    collection: "visitors",
    initialVisitors: 1,                                        // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false                                      // 网站拥有者访问时，是否增加浏览量
  },
  themeColor: "#2aa0bb",                                     // 主题色 #ff6347 ; #2aa0bb
  defaultLang: "zh",                                           // default language, "zh" and "en" are supported currently


  /** -------------------------------------------------注意----------------------------------------------------- */

  githubRepo: "nuxt3-blog"                                    // 需要与仓库名一致，如果fork时更改了仓库名，则这里也要改
};
