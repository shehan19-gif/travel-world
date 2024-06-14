const data = [
    {
        country: "Denmark",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien ligula, aliquam at tellus malesuada, dapibus vehicula elit. Maecenas eget porttitor mauris. Quisque dictum tempus facilisis. Sed vel est bibendum ligula iaculis egestas in tincidunt sem. Phasellus sit amet ante et tellus scelerisque ornare. Sed malesuada lacus sed augue laoreet, ut tristique enim vestibulum. Phasellus eget quam a lectus tristique pretium id at neque. Morbi lorem dolor, ullamcorper sed bibendum ut, tincidunt quis ex. In sed ipsum ornare, consectetur sem non, luctus risus. Integer congue massa eget aliquet placerat. Pellentesque non fermentum ex. Etiam convallis vel eros posuere commodo. Duis at felis egestas, pharetra sem at, tempus ante.

        Ut non accumsan augue. Phasellus sit amet erat ac leo porta tincidunt. Aenean lacinia dolor velit, at maximus magna commodo non. Etiam consectetur ullamcorper risus sit amet tempor. Mauris metus nulla, facilisis at tristique in, laoreet vitae urna. Curabitur quis neque lacinia velit accumsan facilisis a eu turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eget quam vehicula, imperdiet enim id, dictum velit. Aliquam nulla ligula, viverra vel maximus ut, finibus eget arcu. Nam egestas facilisis placerat. Praesent vitae maximus neque, eu aliquet leo. Aenean ullamcorper convallis malesuada. Fusce in odio nibh. Praesent pretium semper malesuada. Nulla id feugiat purus, vitae finibus velit.
        
        Nunc ante leo, convallis at ligula quis, accumsan sollicitudin sapien. Vestibulum semper sed turpis eu semper. Vivamus finibus id ex ac consequat. Donec vel sem orci. Morbi pulvinar sed tellus nec egestas. Maecenas odio ex, tristique eu dolor nec, rhoncus tincidunt risus. Aliquam scelerisque lectus vulputate justo facilisis, quis tristique mi elementum. Quisque rutrum nunc sed felis sagittis, eget porttitor mauris lacinia. Suspendisse potenti. Nullam varius, augue ut semper tincidunt, dui enim pulvinar arcu, consectetur porttitor nisl quam ac purus. Vestibulum euismod odio nec gravida varius. Mauris tincidunt commodo iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac tellus ac est sagittis convallis.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sapien ligula, aliquam at tellus malesuada, dapibus vehicula elit. Maecenas eget porttitor mauris. Quisque dictum tempus facilisis. Sed vel est bibendum ligula iaculis egestas in tincidunt sem. Phasellus sit amet ante et tellus scelerisque ornare. Sed malesuada lacus sed augue laoreet, ut tristique enim vestibulum. Phasellus eget quam a lectus tristique pretium id at neque. Morbi lorem dolor, ullamcorper sed bibendum ut, tincidunt quis ex. In sed ipsum ornare, consectetur sem non, luctus risus. Integer congue massa eget aliquet placerat. Pellentesque non fermentum ex. Etiam convallis vel eros posuere commodo. Duis at felis egestas, pharetra sem at, tempus ante.

        Ut non accumsan augue. Phasellus sit amet erat ac leo porta tincidunt. Aenean lacinia dolor velit, at maximus magna commodo non. Etiam consectetur ullamcorper risus sit amet tempor. Mauris metus nulla, facilisis at tristique in, laoreet vitae urna. Curabitur quis neque lacinia velit accumsan facilisis a eu turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eget quam vehicula, imperdiet enim id, dictum velit. Aliquam nulla ligula, viverra vel maximus ut, finibus eget arcu. Nam egestas facilisis placerat. Praesent vitae maximus neque, eu aliquet leo. Aenean ullamcorper convallis malesuada. Fusce in odio nibh. Praesent pretium semper malesuada. Nulla id feugiat purus, vitae finibus velit.
        
        Nunc ante leo, convallis at ligula quis, accumsan sollicitudin sapien. Vestibulum semper sed turpis eu semper. Vivamus finibus id ex ac consequat. Donec vel sem orci. Morbi pulvinar sed tellus nec egestas. Maecenas odio ex, tristique eu dolor nec, rhoncus tincidunt risus. Aliquam scelerisque lectus vulputate justo facilisis, quis tristique mi elementum. Quisque rutrum nunc sed felis sagittis, eget porttitor mauris lacinia. Suspendisse potenti. Nullam varius, augue ut semper tincidunt, dui enim pulvinar arcu, consectetur porttitor nisl quam ac purus. Vestibulum euismod odio nec gravida varius. Mauris tincidunt commodo iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac tellus ac est sagittis convallis.`,
        gallery: [],
    },
    {
        country: "Norway",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: "https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        details: "",
        gallery: [],
    },
    {
        country: "Sweden",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        details: "",
        gallery: [],
    },
];

export default data;