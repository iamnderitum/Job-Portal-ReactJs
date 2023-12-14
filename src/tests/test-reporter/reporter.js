module.exports = class TestReporter {
    constructor() {}

    onRunComplete(_, results) {
      console.log("\ntotal test cases:", results.numTotalTests);
      console.log("\npassed test cases:", results.numPassedTests);
      console.log("\nfailed test cases:", results.numFailedTests);
      const testCases = []
      for(const tr of results.testResults){
        for(const tr11 of tr.testResults){
          const tc = {
            title: tr11?.ancestorTitles.join(' | ').concat(` | ${tr11?.title}`),
            status: tr11?.status,
          };
          console.log(`===>TC ${JSON.stringify(tc)} TC<===`)
        }
      }
    }
  }