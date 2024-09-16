const Test = require("@codewars/test-compat");

let candidate1 = { minSalary: 120000 },
  candidate2 = { minSalary: 190000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 },
  job3 = { maxSalary: 171000 };

function _match(candidate, job) {
  if (!(candidate && candidate.minSalary)) throw "Please provide the candidate's minimum salary";
  if (!(job && job.maxSalary)) throw "Please provide the job's maximum salary";
  return job.maxSalary >= candidate.minSalary * 0.9;
}

describe("match", function () {
  it("should detect valid matches", function () {
    let msg = (c, j) => `Match is valid when jobs maxSalary ($${j.maxSalary}) is above the candidates minSalary ($${c.minSalary} - 10% wiggle room)`;
    Test.expect(match(candidate1, job1), msg(candidate1, job1));
    Test.expect(match(candidate1, job3), msg(candidate1, job3));
    Test.expect(match(candidate2, job3), msg(candidate2, job3));
  });
  it("should detect invalid matches", function () {
    let msg = (c, j) => `Match is invalid when jobs maxSalary ($${c.minSalary}) is below the candidates minSalary ($${j.maxSalary})`;
    Test.expect(!match(candidate1, job2), msg(candidate1, job2));
    Test.expect(!match(candidate2, job1), msg(candidate2, job1));
    Test.expect(!match(candidate2, job2), msg(candidate2, job2));
  });
  it("should throw when a candidate has no minSalary", function () {
    Test.expectError(function () {
      match({}, job1);
    });
  });
  it("should throw when a job has no maxSalary", function () {
    Test.expectError(function () {
      match(candidate1, {});
    });
  });
});

describe("match - random", function () {
  it("should handle random test cases", function () {
    for (let i = 0; i < 20; i++) {
      let candidate = { minSalary: (Test.randomNumber() + 1) * 1000 },
        job = { maxSalary: (Test.randomNumber() + 1) * 1000 };
      Test.expect(match(candidate, job) == _match(candidate, job));
    }
  });
});
