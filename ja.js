const messages = {
    _default: (field) => `${field}が正しい値ではありません`,
    after: (field, [target]) => `${field}は${target}の後に入力してください`,
    alpha_dash: (field) => `${field}は英数字とハイフン、アンダースコアのみ使用できます`,
    alpha_num: (field) => `${field}は英数字のみ使用できます`,
    alpha_spaces: (field) => `${field}はアルファベットと空白のみ使用できます`,
    alpha: (field) => `${field}はアルファベットのみ使用できます`,
    before: (field, [target]) => `${field}は${target}よりも前に入力してください`,
    between: (field, [min, max]) => `${field}は${min}から${max}の範囲で入力してください`,
    confirmed: (field) => `${field}が一致しません`,
    credit_card: (field) => `${field}を正しく入力してください`,
    date_between: (field, [min, max]) => `${field}は${min}から${max}の範囲で入力してください`,
    date_format: (field, [format]) => `${field}は${format}形式で入力してください`,
    decimal: (field, [decimals] = ['*']) => `${field}は整数及び小数点以下${decimals === '*' ? '' : decimals}桁までの数字で入力してください`,
    digits: (field, [length]) => `${field}は${length}桁の数字で入力してください`,
    dimensions: (field, [width, height]) => `${field}は幅${width}px、高さ${height}px以内で入力してください`,
    email: (field) => `${field}が有効なメールアドレスではありません`,
    ext: (field) => `${field}が有効なファイル形式ではありません`,
    image: (field) => `${field}が有効な画像形式ではありません`,
    in: (field) => `${field}が有効な値ではありません`,
    integer: (field) => `${field}には数字を入力してください`,
    ip: (field) => `${field}が有効な値ではありません`,
    length: (field, [length, max]) => {
      if (max) {
        return `${field}は${length}〜${max}文字で入力してください`;
      }

      return `${field}は${length}文字で入力してください`;
    },
    max: (field, [length]) => `${field}は${length}文字以内で入力してください`,
    max_value: (field, [max]) => `${field}は${max}以下で入力してください`,
    mimes: (field) => `${field}は有効なファイル形式ではありません`,
    min: (field, [length]) => `${field}は${length}文字以上で入力してください`,
    min_value: (field, [min]) => `${field}は${min}以上で入力してください`,
    not_in: (field) => `${field}が不正な値です`,
    numeric: (field) => `${field}は数字のみ使用できます`,
    regex: (field) => `${field}が正しくありません`,
    required: (field) => `${field}は必須です`,
    size: (field, [size]) => `${field}は${formatFileSize(size)}以内にしてください`,
    url: (field) => `${field}が正しいURLではありません`
};
