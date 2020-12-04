
const path = require('path')
//new module to create pages from contentful
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/Singlepost.js')
    const projectTemplate = path.resolve('./src/templates/Singleproject.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                        lang
                        title
                    }
                }
            }
            allContentfulProjects {
                edges {
                    node {
                        slug
                        lang
                        title
                    }
                }
            }
        }
    `)
    //test
    console.log("=========Blogs Found=========");
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        console.log(edge.node.title);
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    console.log("=========End Blog Found=========");
    //end test
    //test
    console.log("=========Projects Found=========");
    res.data.allContentfulProjects.edges.forEach((edge) => {
        console.log(edge.node.title);
        createPage({
            component: projectTemplate,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    console.log("=========End Project Found=========");
    //end test
}