## Hướng dẫn clone một phần repo

Clone repository về, và thêm vào option `--no-checkout` để lấy về tracking info của repo chứ không lấy về bất cứ file/folder nào cả.

```
git clone --no-checkout https://github.com/buihien0109/learning-git.git
```

Sử dụng lệnh `git sparse-checkout` set để chỉ định các thư mục muốn pull về

```
cd learning-git
git sparse-checkout set example-1 example-2
```

Kiểm tra danh sách các sparse checkout bằng lệnh

```
git sparse-checkout list
```

Checkout các file trong list này về bằng lệnh

```
git checkout
```

Lúc này sẽ thấy 2 folder `example-1` và `example-2`

Khi gõ lệnh `git status` sẽ thấy clone bao nhiêu phần của repo:

```
git status
```

Kết quả

```
On branch main
Your branch is up to date with 'origin/main'.

You are in a sparse checkout with 20% of tracked files present.
```

Điều này có nghĩa chỉ có khoảng 20% nội dung project trên working copy này

> Lưu ý là chức năng sparse-checkout chỉ có từ phiên bản git v2.26.0 trở lên.

Chi tiết xem tại đây: [Clone một phần repo với sparse-checkout](https://topdev.vn/blog/clone-mot-phan-repo-voi-sparse-checkout/?utm_source=facebook&utm_medium=post&utm_campaign=techtalk&utm_content=b_git&utm_term=huytran)