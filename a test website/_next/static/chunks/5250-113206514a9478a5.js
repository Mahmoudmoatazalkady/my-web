"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5250], {
    7887: function(e, s, a) {
        var i = a(7437)
          , t = a(7095)
          , r = a(3781)
          , d = a.n(r);
        s.default = e => {
            let {end: s, decimals: a, extraClass: r} = e;
            return (0,
            i.jsx)(t.ZP, {
                end: s || 100,
                duration: 3,
                decimals: a || 0,
                children: e => {
                    let {countUpRef: a, start: t} = e;
                    return (0,
                    i.jsx)(d(), {
                        onChange: t,
                        delayedCall: !0,
                        children: (0,
                        i.jsx)("span", {
                            className: "".concat(r),
                            "data-from": "0",
                            "data-to": s,
                            ref: a,
                            children: "count"
                        })
                    })
                }
            })
        }
    },
    714: function(e, s, a) {
        var i = a(7437)
          , t = a(4488)
          , r = a(5596);
        let d = e => {
            let {item: s} = e;
            return (0,
            i.jsxs)("div", {
                className: "food-menu-item style-two",
                children: [(0,
                i.jsx)("div", {
                    className: "image",
                    children: (0,
                    i.jsx)("img", {
                        src: s.img,
                        alt: "Food Menu"
                    })
                }), (0,
                i.jsxs)("div", {
                    className: "content",
                    children: [(0,
                    i.jsxs)("h5", {
                        children: [(0,
                        i.jsx)("span", {
                            className: "title",
                            children: s.title
                        }), " ", (0,
                        i.jsx)("span", {
                            className: "dots"
                        }), " ", (0,
                        i.jsxs)("span", {
                            className: "price",
                            children: ["$", s.price]
                        })]
                    }), (0,
                    i.jsx)("p", {
                        children: s.decs
                    })]
                })]
            })
        }
        ;
        s.default = e => {
            let {menus: s} = e
              , a = s || [{
                id: 1,
                title: "dessert",
                icon: "flaticon-cupcake",
                event: "food-tab1",
                items: [{
                    id: 1,
                    title: "beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food1.png"
                }, {
                    id: 2,
                    title: "Italian pizza",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food2.png"
                }, {
                    id: 3,
                    title: "Chicken roll",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food3.png"
                }, {
                    id: 4,
                    title: "shawarma",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food4.png"
                }, {
                    id: 5,
                    title: "Sea octopus",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food5.png"
                }, {
                    id: 6,
                    title: "Beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food6.png"
                }, {
                    id: 7,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food7.png"
                }, {
                    id: 8,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }]
            }, {
                id: 2,
                title: "vegetarian",
                icon: "flaticon-broccoli",
                event: "food-tab2",
                items: [{
                    id: 3,
                    title: "Chicken roll",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food3.png"
                }, {
                    id: 4,
                    title: "shawarma",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food4.png"
                }, {
                    id: 1,
                    title: "beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food1.png"
                }, {
                    id: 6,
                    title: "Beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food6.png"
                }, {
                    id: 2,
                    title: "Italian pizza",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food2.png"
                }, {
                    id: 8,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }, {
                    id: 9,
                    title: "Sea octopus",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food5.png"
                }, {
                    id: 10,
                    title: "raw mince beef",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }]
            }, {
                id: 3,
                title: "potatoes",
                icon: "flaticon-fried-potatoes",
                event: "food-tab3",
                items: [{
                    id: 2,
                    title: "Italian pizza",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food2.png"
                }, {
                    id: 3,
                    title: "Chicken roll",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food3.png"
                }, {
                    id: 1,
                    title: "beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food1.png"
                }, {
                    id: 4,
                    title: "shawarma",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food4.png"
                }, {
                    id: 8,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food7.png"
                }, {
                    id: 5,
                    title: "Sea octopus",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food5.png"
                }, {
                    id: 6,
                    title: "Beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food6.png"
                }, {
                    id: 10,
                    title: "raw mince beef",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }]
            }, {
                id: 4,
                title: "seafood",
                icon: "flaticon-crab",
                event: "food-tab4",
                items: [{
                    id: 5,
                    title: "Sea octopus",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food5.png"
                }, {
                    id: 1,
                    title: "beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food1.png"
                }, {
                    id: 2,
                    title: "Italian pizza",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food2.png"
                }, {
                    id: 3,
                    title: "Chicken roll",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food3.png"
                }, {
                    id: 4,
                    title: "shawarma",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food4.png"
                }, {
                    id: 6,
                    title: "Beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food6.png"
                }, {
                    id: 7,
                    title: "raw mince beef",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }, {
                    id: 8,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food7.png"
                }]
            }, {
                id: 5,
                title: "drinks",
                icon: "flaticon-poinsettia",
                event: "food-tab5",
                items: [{
                    id: 2,
                    title: "Italian pizza",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food2.png"
                }, {
                    id: 1,
                    title: "beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food1.png"
                }, {
                    id: 3,
                    title: "Chicken roll",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food3.png"
                }, {
                    id: 4,
                    title: "shawarma",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food4.png"
                }, {
                    id: 5,
                    title: "Sea octopus",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food5.png"
                }, {
                    id: 6,
                    title: "Beef burger",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food6.png"
                }, {
                    id: 7,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food7.png"
                }, {
                    id: 8,
                    title: "hot dog mustard",
                    price: "25",
                    decs: "Diverse menu features array delectable",
                    img: "assets/images/food/rm-food8.png"
                }]
            }];
            return (0,
            i.jsxs)("section", {
                className: "restaurant-menu-area pb-100 rpb-70 rel z-1",
                children: [(0,
                i.jsxs)("div", {
                    className: "container container-1050",
                    children: [(0,
                    i.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        i.jsx)("div", {
                            className: "col-xl-8 col-lg-9",
                            children: (0,
                            i.jsxs)("div", {
                                className: "section-title text-center mb-50",
                                "data-aos": "fade-up",
                                "data-aos-duration": 1500,
                                "data-aos-offset": 50,
                                children: [(0,
                                i.jsx)("span", {
                                    className: "sub-title mb-5",
                                    children: "popular menu"
                                }), (0,
                                i.jsx)("h2", {
                                    children: "we provide exclusive food based on usa explore our popular food"
                                })]
                            })
                        })
                    }), (0,
                    i.jsxs)(t.Z.Container, {
                        defaultActiveKey: "food-tab1",
                        children: [(0,
                        i.jsx)(r.Z, {
                            as: "ul",
                            className: "nav food-menu-tab mb-40",
                            "data-aos": "fade-up",
                            "data-aos-delay": 50,
                            "data-aos-duration": 1500,
                            "data-aos-offset": 50,
                            children: a.map(e => (0,
                            i.jsx)(r.Z.Item, {
                                as: "li",
                                children: (0,
                                i.jsxs)(r.Z.Link, {
                                    as: "button",
                                    className: "nav-link",
                                    eventKey: e.event,
                                    children: [(0,
                                    i.jsx)("i", {
                                        className: e.icon
                                    }), (0,
                                    i.jsx)("span", {
                                        children: e.title
                                    })]
                                })
                            }, e.id))
                        }), (0,
                        i.jsx)(t.Z.Content, {
                            className: "food-menu-tab-content tab-content",
                            children: a.map(e => (0,
                            i.jsx)(t.Z.Pane, {
                                className: "tab-pane fade",
                                eventKey: e.event,
                                children: (0,
                                i.jsxs)("div", {
                                    className: "row gap-90",
                                    children: [(0,
                                    i.jsx)("div", {
                                        className: "col-lg-6 pb-30",
                                        "data-aos": "fade-right",
                                        "data-aos-duration": 1500,
                                        "data-aos-offset": 50,
                                        children: e.items.map( (e, s) => s < 4 && (0,
                                        i.jsx)(d, {
                                            item: e
                                        }))
                                    }), (0,
                                    i.jsxs)("div", {
                                        className: "col-lg-6 pb-30",
                                        "data-aos": "fade-left",
                                        "data-aos-duration": 1500,
                                        "data-aos-offset": 50,
                                        children: [" ", e.items.map( (e, s) => s >= 4 && (0,
                                        i.jsx)(d, {
                                            item: e
                                        }))]
                                    })]
                                })
                            }, e.id))
                        })]
                    })]
                }), (0,
                i.jsxs)("div", {
                    className: "testimonials-shapes",
                    children: [(0,
                    i.jsx)("div", {
                        className: "shape one",
                        children: (0,
                        i.jsx)("img", {
                            src: "assets/images/shapes/chicken-menu1.png",
                            alt: "Shape"
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: "shape two",
                        children: (0,
                        i.jsx)("img", {
                            src: "assets/images/shapes/chicken-menu2.png",
                            alt: "Shape"
                        })
                    })]
                })]
            })
        }
    }
}]);
