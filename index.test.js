const { toggleReadMore } = require(".");

describe('toggleReadMore function', () => {
    test('toggles display and button text', () => {
        // Set up the initial HTML structure
        document.body.innerHTML = `
            <div class="section">
                <div>
                    <p class="p-tag" id="moreText" style="display: none;">Hidden text</p>
                    <button onclick="toggleReadMore()">See More</button>
                </div>
            </div>
        `;
        toggleReadMore();
        const moreText = document.getElementById('moreText');
        const buttonText = document.querySelector('button');
        expect(moreText.style.display).toBe('block');
        expect(buttonText.textContent).toBe('Read Less');        
        toggleReadMore();
        const updatedMoreText = document.getElementById('moreText');
        const updatedButtonText = document.querySelector('button');
        expect(updatedMoreText.style.display).toBe('none');
        expect(updatedButtonText.textContent).toBe('See More');
    });
});

