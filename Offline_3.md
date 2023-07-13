# Cài đặt Tailwind:

https://tailwindcss.com/docs/installation/using-postcss

- Bước 1:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- Bước 2: tạo file postcss.config.js và thêm nội dung:

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```

