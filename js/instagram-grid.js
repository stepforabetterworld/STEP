// instagram-grid.js
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadLessBtn = document.getElementById('load-less-btn');
    const allPosts = document.querySelectorAll('.instagram-post');
    let visiblePostCount = 2; // Number of posts initially visible
    const postsPerLoad = 2; // Number of posts to show/hide each time
    
    // Initialize visibility
    updatePostVisibility();
    
    // "See More" button functionality
    loadMoreBtn.addEventListener('click', function() {
        visiblePostCount = Math.min(visiblePostCount + postsPerLoad, allPosts.length);
        updatePostVisibility();
        
        // Reinitialize Instagram embeds for newly visible posts
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    });
    
    // "See Less" button functionality
    loadLessBtn.addEventListener('click', function() {
        visiblePostCount = Math.max(2, visiblePostCount - postsPerLoad);
        updatePostVisibility();
    });
    
    function updatePostVisibility() {
        // Show/hide posts based on current visible count
        allPosts.forEach((post, index) => {
            if (index < visiblePostCount) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
        
        // Update button visibility
        loadMoreBtn.style.display = visiblePostCount >= allPosts.length ? 'none' : 'block';
        loadLessBtn.style.display = visiblePostCount > 2 ? 'block' : 'none';
    }
});