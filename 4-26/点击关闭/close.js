// close.js
// 实现关闭按钮点击事件的模块

/**
 * 绑定按钮的点击事件，点击后切换指定元素的显示/隐藏状态
 * @param {string} buttonSelector - 按钮的选择器
 * @param {string} targetSelector - 需要切换显示/隐藏的目标元素选择器
 */
function bindCloseEvent(buttonSelector, targetSelector) {
    const closeBtn = document.querySelector(buttonSelector);
    const target = document.querySelector(targetSelector);
    if (closeBtn && target) {
        closeBtn.addEventListener('click', function() {
            // 检查目标元素的当前显示状态
            if (target.style.display === 'none') {
                // 如果是隐藏的，则显示它
                target.style.display = ''; // 或者设置为 'block', 'flex' 等，取决于原始布局
                closeBtn.textContent = '关闭内容'; // 更新按钮文本
            } else {
                // 如果是显示的，则隐藏它
                target.style.display = 'none';
                closeBtn.textContent = '打开内容'; // 更新按钮文本
            }
        });
    }
}

// 导出函数，便于其他模块调用
window.bindCloseEvent = bindCloseEvent;