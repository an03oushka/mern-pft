import { Progress } from "antd";
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../resources/analatics.css";

function Analatics({ transactions }) {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenceTransactions = transactions.filter(
    (transaction) => transaction.type === "expence"
  );
  const totalIncomeTransactionsPercentage =
    (totalIncomeTransactions.length / totalTransactions) * 100;
  const totalExpenceTransactionsPercentage =
    (totalExpenceTransactions.length / totalTransactions) * 100;

  const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenceTurnover = transactions
    .filter((transaction) => transaction.type === "expence")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenceTurnoverPercentage =
    (totalExpenceTurnover / totalTurnover) * 100;

  const categories = [
    "salary",
    "entertainment",
    "freelance",
    "food",
    "travel",
    "investment",
    "education",
    "medical",
    "tax",
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total Transactions : {totalTransactions}</h4>
            <hr />
            <h5>Income : {totalIncomeTransactions.length}</h5>
            <h5>Expence : {totalExpenceTransactions.length}</h5>

            <div className="progress-bars">
              {/* Add Link around Progress component */}
              <Link to="/chart">
                <Progress
                  className="mx-5"
                  strokeColor="#5DD64F"
                  type="circle"
                  percent={totalIncomeTransactionsPercentage.toFixed(0)}
                />
              </Link>
              <Link to="/chart">
                <Progress
                  strokeColor="#E5572F"
                  type="circle"
                  percent={totalExpenceTransactionsPercentage.toFixed(0)}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total Turnover : {totalTurnover}</h4>
            <hr />
            <h5>Income : {totalIncomeTurnover}</h5>
            <h5>Expence : {totalExpenceTurnover}</h5>

            <div className="progress-bars">
              <Link to="/chart">
                <Progress
                  className="mx-5"
                  strokeColor="#5DD64F"
                  type="circle"
                  percent={totalIncomeTurnoverPercentage.toFixed(0)}
                />
              </Link>
              <Link to="/chart">
                <Progress
                  strokeColor="#E5572F"
                  type="circle"
                  percent={totalExpenceTurnoverPercentage.toFixed(0)}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Link to="/chart">
                      <Progress
                        strokeColor="#0B5AD9"
                        percent={((amount / totalIncomeTurnover) * 100).toFixed(0)}
                      />
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expence - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type == "expence" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Link to="/chart">
                      <Progress
                        strokeColor="#0B5AD9"
                        percent={((amount / totalExpenceTurnover) * 100).toFixed(0)}
                      />
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analatics;
