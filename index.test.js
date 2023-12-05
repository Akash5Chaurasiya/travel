function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const buttonText = document.querySelector("button");

    if (moreText.style.display === "none" || !moreText.style.display) {
        moreText.style.display = "block";
        buttonText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        buttonText.textContent = "See More";
    }
}


describe('toggleReadMore function', () => {
    let moreText;
    let buttonText;
    beforeEach(() => {
        document.body.innerHTML = `
        <div id="moreText" style="display: none;">Some more text</div>
        <button>See More</button>
      `;
        moreText = document.getElementById("moreText");
        buttonText = document.querySelector("button");
    });
    test('should toggle visibility and button text correctly', () => {
        // Initial state
        expect(moreText.style.display).toBe('none');
        expect(buttonText.textContent).toBe('See More');
        toggleReadMore();
        expect(moreText.style.display).toBe('block');
        expect(buttonText.textContent).toBe('Read Less');

        toggleReadMore();
        expect(moreText.style.display).toBe('none');
        expect(buttonText.textContent).toBe('See More');
    });

    test('should handle initial display state as "block"', () => {
        moreText.style.display = 'block';
        buttonText.textContent = 'Read Less';
        toggleReadMore();
        expect(moreText.style.display).toBe('none');
        expect(buttonText.textContent).toBe('See More');
    });

    test('should handle undefined display style', () => {
        // Set display style to undefined
        moreText.style.display = undefined;
        toggleReadMore();
        expect(moreText.style.display).toBe('block');
        expect(buttonText.textContent).toBe('Read Less');
    });
});

