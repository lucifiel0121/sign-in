# URL

[sign-in-seven.vercel.app](https://sign-in-seven.vercel.app/)



# Tech stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

- react + react hooks + typescript + next.js + typescript + tailwind css
- add `use-context-selector` for better useContext
- add useReducer for control login state (use Redux when needed)
- add root context for login state (track in localstorage/cookie if large system)

登入 Login / 註冊 Register

- base input
- simple hint text
- clear after actions
- 登入相關資料記在 local storage

導覽列 Nav

- nav can route to different page

# 簽到 app

要求：

1. 可以註冊使用者

2. 可以登錄

3. 點選簽到按鈕，可以記錄簽到時間，地點。簽到需要限制一天早上，中午，晚上個時間段，分別只允許一次簽到。

4. 使用者，簽到時間等相關資料可以通過【 react-native-local-mongodb 】等管理 : 不熟悉 mongodb 相關語法，直接使用 local storage
5. 可以查看簽到的統計結果。

6. 可以對應（Android,iOS）手機，平板: RWD
7. 1 到 5 沒有提到的功能可以自由發揮。
