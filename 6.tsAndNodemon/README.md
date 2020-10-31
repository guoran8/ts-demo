### nodemon 配置文件
```
restartable：我们可以用来手动重新启动程序的命令
ignore：不希望在更改时触发程序重新启动的文件列表
watch：更改时我们希望触发程序重新启动的路径列表
execMap：文件类型/扩展名与运行时之间的映射
env：要包含的环境变量
ext：Nodemon监视的文件扩展名
```

### SCRIPTS
dev:debug --inspect-brk 标志，告诉node停止程序的执行  
直到连接上调试器  
可以换成 --inspect 标志来调试而不停止。
现在，我们可以使用 npm run dev 运行我们的程序  
试着修改一些东西，就可以看到程序用更新的代码重新运行。