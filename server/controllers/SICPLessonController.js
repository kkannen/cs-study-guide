let SICPLesson = require("../models/SICPLessonModel");


module.exports.read = function read(request, response) {
    SICPLesson.find({}).exec()
    .then(sicplessons => response.send(sicplessons.sort()))
    console.log("got the lessons, bish")
};

// let listOfLessons = [
//     {
//             "title": "Functions",
//             "reading": {
//                 "1.1": "http://composingprograms.com/pages/11-getting-started.html", 
//                 "1.2": "http://composingprograms.com/pages/12-elements-of-programming.html"
//             },
//             "playlist": "PL6BsET-8jgYUV8Jxv0D7BLxbg-xIkh0vk"
//         },
//         {
//             "title": "Names",
//             "reading": {
//                 "1.3": "http://composingprograms.com/pages/13-defining-new-functions.html",
//                 "1.4": "http://composingprograms.com/pages/14-designing-functions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYW16P20tNV8hwpBUiCyQB5c"
//         },
//         {
//             "title": "Control",
//             "reading": {
//                 "1.5" : "http://composingprograms.com/pages/15-control.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUEhr4iByK789l8Jbx9UHjm"
//         },
//         {
//             "title": "Higher-Order Functions",
//             "reading": {
//                 "1.6": "http://composingprograms.com/pages/16-higher-order-functions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYVW_e0KbBrXbtyDMcTMtCWR"
//         },
//         {
//             "title": "Environments",
//             "reading": {
//                 "1.6": "http://composingprograms.com/pages/16-higher-order-functions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYV92mJGKvn8EFs3dKuDQ5h4"
//         },
//         {
//             "title": "Iteration",
//             "reading": {
//                 none : ""
//             }, 
//             "playlist": "PL6BsET-8jgYUTs_JCU3Zz8KBcF-X3P4Ds"
//         },
//         {
//             "title": "Recursion",
//             "reading": {
//                 "1.7": "http://composingprograms.com/pages/17-recursive-functions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYXF2TzAQRQeaZwhp-9DfE1r"
//         },
//         {
//             "title": "Tree Recursion",
//             "reading": {
//                 "1.7": "http://composingprograms.com/pages/17-recursive-functions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWRZL52UCDPQeuarzmd58Xo"
//         },
//         {
//             "title": "Function Examples",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYVg0YNlIeajft-CawFSgHp9"
//         },
//         {
//             "title": "Data Abstraction",
//             "reading": {
//                 "2.1": "http://composingprograms.com/pages/21-introduction.html",
//                 "2.2": "http://composingprograms.com/pages/22-data-abstraction.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWHpu_eCvAHNuEWxVfgE3x8"
//         },
//         {
//             "title": "Containers",
//             "reading": {
//                 "2.3": "http://composingprograms.com/pages/23-sequences.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUi0aglfZx9AWBgm_cDnLwx"
//         },
//         {
//             "title": "Trees",
//             "reading": {
//                 "2.3": "http://composingprograms.com/pages/23-sequences.html"
//             }, 
//             "playlist": "PL6BsET-8jgYU_D4zfjxpO_ItfvMimn4Yv"
//         },
//         { 
//             "title": "Mutable Values",
//             "reading": {
//                 "2.4": "http://composingprograms.com/pages/24-mutable-data.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUqH93Ik4w5Rk-A3qGMhhq0"
//         },
//         {
//             "title": "Mutable Functions",
//             "reading": {
//                 "2.4": "http://composingprograms.com/pages/24-mutable-data.html"
//             },
//             "playlist": "PL6BsET-8jgYX65Qx8DP2ColF_ldpgScu8"
//         },
//         { 
//             "title": "Objects",
//             "reading": {
//                 "2.5": "http://composingprograms.com/pages/25-object-oriented-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUIiXSvk-fKPZD13EyQOt0O"
//         },
//         { 
//             "title": "Inheritance",
//             "reading": {
//                 "2.5": "http://composingprograms.com/pages/25-object-oriented-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUQ_XExDUYYQPd00ErJ6ELL"
//         },
//         { 
//             "title": "Representation",
//             "reading": {
//                 "2.7": "http://composingprograms.com/pages/27-object-abstraction.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWUwZ42xtrbX04mSx7GMHUo"
//         },
//         {
//             "title": "Growth",
//             "reading": {
//                 "2.8": "http://composingprograms.com/pages/28-efficiency.html"
//             }, 
//             "playlist": "PL6BsET-8jgYX5-rjCovKDAwPQHkiCwvEU"
//         },
//         { 
//             "title": "Composition",
//             "reading": {
//                 "2.9":"http://composingprograms.com/pages/29-recursive-objects.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWKyc-ouo_hTpzAWtwCPPxa"
//         },
//         { 
//             "title": "Ordered Sets",
//             "reading": {
//                 "2.9":"http://composingprograms.com/pages/29-recursive-objects.html"
//             }, 
//             "playlist": "PL6BsET-8jgYXzWgS7H0xgwXoAfE_oc5Qb"
//         },
//         {
//             "title": "Tree Sets",
//             "reading": {
//                 "2.9":"http://composingprograms.com/pages/29-recursive-objects.html"
//             },
//             "playlist": "PL6BsET-8jgYW4UWd5R37kQycegdTdIhsS"
//         },
//         {
//             "title": "Data Examples",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYWRTU90CoXS2iWz_USTRL0c"
//         },
//         {
//             "title": "Users",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYUlSbq0p54SmIzZ2JYPXGts"
//         },
//         {
//             "title": "Scheme",
//             "reading": {
//                 "3.1": "http://composingprograms.com/pages/31-introduction.html",
//                 "3.2": "http://composingprograms.com/pages/32-functional-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYXpPFbGypFn_9k_2nuVs5M6"
//         },
//         {
//             "title": "Exceptions",
//             "reading": {
//                 "3.3": "http://composingprograms.com/pages/33-exceptions.html"
//             }, 
//             "playlist": "PL6BsET-8jgYU4BjMjrgB9tLdViW9pEDGX"
//         },
//         {
//             "title": "Calculator",
//             "reading": {
//                 "3.4": "http://composingprograms.com/pages/34-interpreters-for-languages-with-combination.html"
//             }, 
//             "playlist": "PL6BsET-8jgYVovQvtP3PvcfVbjAC1jYST"
//         },
//         {
//             "title": "Interpreters",
//             "reading": {
//                 "3.5": "http://composingprograms.com/pages/35-interpreters-for-languages-with-abstraction.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWkNhlFFR3S-110mYMrIBsM"
//         },
//         {
//             "title": "Tail Calls",
//             "reading": {
//                 "3.5": "http://composingprograms.com/pages/35-interpreters-for-languages-with-abstraction.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUA7ovVQOPdh0pcN2q8V-OF"
//         },
//         {
//             "title": "Macros",
//             "reading": {
//                 "3.5": "http://composingprograms.com/pages/35-interpreters-for-languages-with-abstraction.html"
//             }, 
//             "playlist": "PL6BsET-8jgYXaarLsOaMDembuk50N5JZA"
//         },
//         {
//             "title": "Iterators",
//             "reading": {
//                 "4.2": "http://composingprograms.com/pages/42-implicit-sequences.html"}, 
//             "playlist": "PL6BsET-8jgYVTVMvLUZAj2-YZnjCut54x"
//         },
//         {
//             "title": "Streams",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYUO-IrsWTEQR8KMmuBpOzO7"
//         },
//         {
//             "title": "Declarative Programming",
//             "reading": {
//                 "4.3": "http://composingprograms.com/pages/43-declarative-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYUKZAfH3O1-SiLiq2WpMq4m"
//         },
//         {
//             "title": "Tables",
//             "reading": {
//                 "4.3": "http://composingprograms.com/pages/43-declarative-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYX3SS64KJHIowkbF79_a4CI"
//         },
//         {
//             "title": "Aggregation",
//             "reading": {
//                 "4.3": "http://composingprograms.com/pages/43-declarative-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYWhgER1m9kIMsR8BuTPBtBo"
//         },
//         {
//             "title": "Databases",
//             "reading": {
//                 "4.3": "http://composingprograms.com/pages/43-declarative-programming.html"
//             }, 
//             "playlist": "PL6BsET-8jgYX_mx1R76-cWV8qXA3SRcNd"
//         },
//         {
//             "title": "Distributed Data",
//             "reading": {
//                 "4.6": "http://composingprograms.com/pages/46-distributed-computing.html"
//             }, 
//             "playlist": "PL6BsET-8jgYXEV-oLtHpCcD_-SB4DYYrg"
//         },
//         {
//             "title": "Natural Language",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYUV7CtxRg3PCHbWrbWPba3H"
//         },
//         {
//             "title": "Conclusion",
//             "reading": {"none": ""}, 
//             "playlist": "PL6BsET-8jgYVMA9AgNMhadqkqnj_8YXBK"
//         }]

// module.exports.create =  function create(request, response) {
//     console.log(listOfLessons)
//     listOfLessons.map((lesson, index) => {
//         const newSICPLesson = new SICPLesson({
//             "lessonNumber": index+1,
//             "title": lesson["title"] ,
//             "reading": lesson["reading"], 
//             "playlist": lesson["playlist"],
//             "checked": false
//         });
//         newSICPLesson.save()
//         .then(savedSICPLesson => response.json(savedSICPLesson))
//     })
// };