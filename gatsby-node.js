
const path = require('path')
//new module to create pages from contentful
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/Singlepost.js');
    const projectTemplate = path.resolve('./src/templates/Singleproject.js');
    return new Promise((resolve,reject) => {
        graphql(`
            {
                allDatoCmsBlogpost {
                    totalCount
                    edges {
                        node {
                            slug
                            title
                            locale
                        }
                    }
                }
                allDatoCmsPortfolio {
                    totalCount
                    edges {
                      node {
                        locale
                        slug
                        title
                      }
                    }
                  }
            }
        `).then(result => {
            console.log('Posts Found on GN: ', result.data.allDatoCmsBlogpost.totalCount);
            console.log('Projects found GN: ', result.data.allDatoCmsPortfolio.totalCount);
            //for blog
            result.data.allDatoCmsBlogpost.edges.map(({ node: blogpost }) => {
                createPage({
                    path: `/Blog/${blogpost.slug}`,
                    component: blogTemplate,
                    context: {
                        slug: blogpost.slug,
                        locale: blogpost.locale,
                    },
                })
            });
            //for portfolio
            result.data.allDatoCmsPortfolio.edges.map(({ node: project }) => {
                createPage({
                    path: `/Portfolio/${project.slug}`,
                    component: projectTemplate,
                    context: {
                        slug: project.slug,
                        locale: project.locale,
                    },
                })
            });
            resolve();
        }).catch(error => {
            console.log('Error when creating data from DatoCMS: ', error);
            reject();
        })
    });
    // const blogTemplate = path.resolve('./src/templates/Singlepost.js')
    // const projectTemplate = path.resolve('./src/templates/Singleproject.js')
    // const res = await graphql(`
    //     query {
    //         allContentfulBlogPost {
    //             edges {
    //                 node {
    //                     slug
    //                     lang
    //                     title
    //                 }
    //             }
    //         }
    //         allContentfulProjects {
    //             edges {
    //                 node {
    //                     slug
    //                     lang
    //                     title
    //                 }
    //             }
    //         }
    //     }
    // `)
    //test
    // console.log("=========Blogs Found=========");
    // res.data.allContentfulBlogPost.edges.forEach((edge) => {
    //     // console.log(edge.node.title);
    //     createPage({
    //         component: blogTemplate,
    //         path: `/Blog/${edge.node.slug}`,
    //         context: {
    //             slug: edge.node.slug
    //         }
    //     })
    // })
    // console.log("=========End Blog Found=========");
    //end test
    //test
    // console.log("=========Projects Found=========");
    // res.data.allContentfulProjects.edges.forEach((edge) => {
    //     // console.log(edge.node.title);
    //     createPage({
    //         component: projectTemplate,
    //         path: `/Portfolio/${edge.node.slug}`,
    //         context: {
    //             slug: edge.node.slug
    //         }
    //     })
    // })
    // console.log("=========End Project Found=========");
    //end test
}