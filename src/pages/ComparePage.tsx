import React, { useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ComparePage.module.css';
import jobsData from '../data/jobs.json';

interface SalaryStats {
  min: number;
  max: number;
  avg: number;
  count: number;
}

const ComparePage: React.FC = () => {
  // エリア別・職種別の給与統計を計算
  const stats = useMemo(() => {
    const areaStats: Record<string, Record<string, SalaryStats>> = {};
    const jobTypeStats: Record<string, SalaryStats> = {};

    jobsData.forEach((job) => {
      const salary = extractNumericSalary(job.salary);
      if (salary === null) return;

      // エリア別統計
      if (!areaStats[job.area]) {
        areaStats[job.area] = {};
      }
      if (!areaStats[job.area][job.jobType]) {
        areaStats[job.area][job.jobType] = {
          min: salary,
          max: salary,
          avg: salary,
          count: 1,
        };
      } else {
        const s = areaStats[job.area][job.jobType];
        s.min = Math.min(s.min, salary);
        s.max = Math.max(s.max, salary);
        s.avg = (s.avg * s.count + salary) / (s.count + 1);
        s.count += 1;
      }

      // 職種別統計
      if (!jobTypeStats[job.jobType]) {
        jobTypeStats[job.jobType] = {
          min: salary,
          max: salary,
          avg: salary,
          count: 1,
        };
      } else {
        const s = jobTypeStats[job.jobType];
        s.min = Math.min(s.min, salary);
        s.max = Math.max(s.max, salary);
        s.avg = (s.avg * s.count + salary) / (s.count + 1);
        s.count += 1;
      }
    });

    return { areaStats, jobTypeStats };
  }, []);

  const areas = Object.keys(stats.areaStats).sort();
  const jobTypes = Object.keys(stats.jobTypeStats).sort();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>給与・条件比較</h1>
        <p className={styles.intro}>
          エリア・職種別の給与相場と勤務条件をデータから可視化しました。
        </p>

        {/* エリア別給与比較 */}
        <section className={styles.section}>
          <h2>エリア別 給与相場</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>エリア</th>
                  <th>最低相場</th>
                  <th>平均</th>
                  <th>最高相場</th>
                  <th>求人数</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area) => {
                  const allJobs = Object.values(stats.areaStats[area]);
                  const combined = {
                    min: Math.min(...allJobs.map((s) => s.min)),
                    max: Math.max(...allJobs.map((s) => s.max)),
                    avg:
                      allJobs.reduce((acc, s) => acc + s.avg * s.count, 0) /
                      allJobs.reduce((acc, s) => acc + s.count, 0),
                    count: allJobs.reduce((acc, s) => acc + s.count, 0),
                  };
                  return (
                    <tr key={area}>
                      <td className={styles.areaName}>{area}</td>
                      <td>¥{combined.min.toLocaleString()}</td>
                      <td>¥{Math.round(combined.avg).toLocaleString()}</td>
                      <td>¥{combined.max.toLocaleString()}</td>
                      <td className={styles.count}>{combined.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* 職種別給与比較 */}
        <section className={styles.section}>
          <h2>職種別 給与相場</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>職種</th>
                  <th>最低相場</th>
                  <th>平均</th>
                  <th>最高相場</th>
                  <th>求人数</th>
                </tr>
              </thead>
              <tbody>
                {jobTypes.map((jobType) => {
                  const s = stats.jobTypeStats[jobType];
                  return (
                    <tr key={jobType}>
                      <td className={styles.jobType}>{jobType}</td>
                      <td>¥{s.min.toLocaleString()}</td>
                      <td>¥{Math.round(s.avg).toLocaleString()}</td>
                      <td>¥{s.max.toLocaleString()}</td>
                      <td className={styles.count}>{s.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* エリア×職種クロス集計 */}
        <section className={styles.section}>
          <h2>エリア × 職種 給与クロス集計</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>エリア / 職種</th>
                  {jobTypes.map((jt) => (
                    <th key={jt}>{jt}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {areas.map((area) => (
                  <tr key={area}>
                    <td className={styles.areaName}>{area}</td>
                    {jobTypes.map((jobType) => {
                      const s = stats.areaStats[area][jobType];
                      return (
                        <td key={`${area}-${jobType}`} className={styles.cell}>
                          {s ? (
                            <div className={styles.salaryRange}>
                              <div className={styles.avg}>
                                ¥{Math.round(s.avg).toLocaleString()}
                              </div>
                              <div className={styles.range}>
                                {s.min.toLocaleString()} 〜{' '}
                                {s.max.toLocaleString()}
                              </div>
                              <div className={styles.jobCount}>({s.count}件)</div>
                            </div>
                          ) : (
                            <span className={styles.noData}>—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 注釈 */}
        <section className={styles.notes}>
          <h3>📌 見方と注釈</h3>
          <ul>
            <li>
              給与は掲載求人から抽出した数値です。実際の支給額は個人の成績・経験に左右されます
            </li>
            <li>
              時給と月給が混在しています。時給は月換算（時給 × 160時間）で参考値です
            </li>
            <li>
              インセンティブ・歩合制は通常給与のみを集計しており、実際はより高くなる傾向です
            </li>
            <li>地域によって求人数の多寡があり、平均値は参考程度としてください</li>
            <li>求人情報は定期的に更新されます</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// 給与文字列から数値を抽出（時給の場合は月換算）
function extractNumericSalary(salaryStr: string): number | null {
  const match = salaryStr.match(/(\d+,?\d*)/);
  if (!match) return null;

  const num = parseInt(match[1].replace(/,/g, ''), 10);

  // 時給と判定して月換算（時給 × 160時間）
  if (salaryStr.includes('時給') && num < 10000) {
    return num * 160;
  }

  return num;
}

export default ComparePage;
