const randomNothing = () => {
    const word = document.querySelector('.word');
    const nothings = [
        'Black and white image of a digital cat comprised of ascii art, overlaying a text background discussing conceptual tools and virtuality.',
        'A minimalist image with the phrases "the poet" and "almost dies" in light gray, placed at the top and bottom respectively, centered and accompanied by small, gray dots.',
        `A light purple background with text that reads "btw i'm being serious -_-" in black font, centered in the image.`,
        `An image displaying three repetitions of the text "she's tapped in, if you let her" with varying spacing and alignment, stylized in a handwriting-like font.`,
        `Image of a text snippet saying: "but if she was being honest with herself... it had been months since she’d heard a poem." the text appears faded with a blurry background.`,
        `A digital illustration of a lined notebook page with two lines of handwritten text reading "imagine this - if i train chat bot to crank out my poems," followed by a pencil emoji.`,
        `A minimalist image with a grey background featuring the text "i took a picture of the ocean" in the center, surrounded by small dots resembling water particles or mist.`,
        `Text image with partially censored sentences, reading "when i was 14, my poetry ____ it was embarrassing." the background is white with substantial blurring around the edges.`,
        `A person highlighting an entire page in a book with a yellow marker. the text "everything" is superimposed over the image, suggesting everything on the page is being highlighted.`,
        `A single yellow sticky note with a curled upper corner, isolated on a white background.`,
        `A black square with white text that reads: "i used to want to be mysterious, but speaking the truth is making me so popular." below, a yellow vertical line is followed by "thanks for the likes sweeties".`,
        `Graphic overlay with the words "future american" in bold blue lettering centered over a backdrop of the american flag.`,
        `An abstract image featuring a blurred background in pastel tones of pink and purple, with a white pause icon centered in the image.`,
        `A close-up image of a textured white paper with visible vertical lines and slight imperfections on the surface.`,
        `This image features three horizontal stripes: a light gray stripe at the top and bottom, and a white stripe in the middle, displayed on a simple gradient background.`,
        `Blurred image of a room with text "a kiss arrives from the future" overlaying, featuring a bright background and plants, giving a peaceful and futuristic vibe.`,
        `Black face mask with ear loops, featuring the white text "glass ceiling" in the center.`,
        `A simple line drawing of a person undergoing an mri scan, with the label "m.r.i" on the top of the scanner.`,
        `A simplistic digital drawing showing a dark background with abstract yellow lines and shapes, and minimalistic blue and red objects resembling seats and a stop signal.`
    ] 

    const nothingsSelect = () => nothings[Math.floor(Math.random() * nothings.length)];     
    word.innerText = nothingsSelect();
}

randomNothing();
