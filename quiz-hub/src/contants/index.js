export const rules = (fieldName) => [
    {
        required: true,
        message: `Vui lòng nhập ${fieldName}!`,
    },
];

export const emailRule = [
    {
        required: true,
        message: "Vui lòng nhập email!",
    },
    {
        type: "email",
        message: "Email không đúng định dạng!",
    },
];

export const passwordRule = [
    {
        required: true,
        message: "Vui lòng nhập mật khẩu!",
    },
    {
        min: 6,
        message: "Mật khẩu phải có ít nhất 6 ký tự!",
    },
];
export const termsRule = [
    {
        validator: (_, value) => {
            if (value) {
                return Promise.resolve();
            }

            return Promise.reject(
                new Error("Bạn cần đồng ý với điều khoản sử dụng!")
            );
        },
    },
];