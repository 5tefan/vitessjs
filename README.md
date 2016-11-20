# vitessjs
Nodejs client library for Vitess



## Importing Vitess proto definitions

The following commands are used to import the Vitess proto definitions. [1] [2] 

```bash
git remote add vitess git@github.com:youtube/vitess.git
# shallow fetch with tags
git fetch --depth=1 -t vitess
# not sure what happens if we have a v2.0.0 tag here?
git merge --squash --allow-unrelated-histories -s subtree --no-commit v2.0.0
git read-tree --prefix=proto -u v2.0.0:proto
```

Use the following to Synchronize the proto definitions with remote Vitess. [3]

```bash
git pull -s subtree vitess master
```

[1] http://bneijt.nl/blog/post/merge-a-subdirectory-of-another-repository-with-git/
[2] https://git-scm.com/book/en/v1/Git-Tools-Subtree-Merging
[3] https://help.github.com/articles/about-git-subtree-merges/
