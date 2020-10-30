// 传统js实现方式
const Status = {
  SUCCESS: 0,
  FAILED: 1,
  COMPLETE: 2
};

// 枚举实现
enum CODE {
  SUCCESS,
  FAILED,
  COMPLETE
}

// CODE.SUCCESS = 0
// CODE[0] = SUCCESS

function receive(status: number): string {
  if (status === CODE.SUCCESS) {
    return 'successful.';
  } else if (status === CODE.FAILED) {
    return 'failed.';
  } else {
    return 'complete.';
  }
}

console.log(receive(0))

