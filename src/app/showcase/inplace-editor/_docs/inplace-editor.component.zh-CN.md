# 就地编辑

就地编辑也是ui-model，因为它有两个状态：编辑和查看。

通过绑定一些事件来切换着两个状态即可实现就地编辑功能了。

这里还使用了一个辅助指令`uiFocus`以便进入编辑状态时让它自动获得焦点。