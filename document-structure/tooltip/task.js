document.addEventListener('DOMContentLoaded', function() {
    let activeTooltip = null;
   
    document.addEventListener('click', function(event) {
        const hint = event.target;
       
        if (hint.classList.contains('has-tooltip')) {
            event.preventDefault();
           
            if (activeTooltip && activeTooltip !== hint) {
                closeTooltip();
            }
           
            if (activeTooltip === hint) {
                closeTooltip();
                return;
            }
           
            showTooltip(hint);
        } else {
            closeTooltip();
        }
    });
   
    function closeTooltip() {
        const tooltip = document.querySelector('.tooltip_active');
        if (tooltip) {
            tooltip.remove();
        }
        activeTooltip = null;
    }
   
    function showTooltip(element) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip tooltip_active';
        tooltip.textContent = element.getAttribute('title');
       
        document.body.appendChild(tooltip);
       
        const elementRect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
       
        let top = elementRect.top - tooltipRect.height - 5;
        let left = elementRect.left;
       
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
       
        activeTooltip = element;
    }
   
    window.addEventListener('scroll', function() {
        closeTooltip();
    });
});