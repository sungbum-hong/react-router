const connection = require('./mysqlController');

const registerUser = (req, res) => {
  try {
    connection.query(
      `SELECT * FROM mydb.user WHERE USERID = '${req.body.id}';`,
      (err, data) => {
        if (err) throw err;
        if (data.length !== 0)
          return res.status(400).json('이미 가입된 회원입니다');
        connection.query(
          `INSERT INTO mydb.user (USERID, PASSWORD) values ('${req.body.id}', '${req.body.password}');`,
          (err, data) => {
            if (err) throw err;
            res.status(200).json('회원가입 성공');
          },
        );
      },
    );
  } catch (err) {
    console.error(err);
    res.status(500).json('회원가입 실패, 알 수 없는 문제 말생');
  }
};

module.exports = {
  registerUser,
};
