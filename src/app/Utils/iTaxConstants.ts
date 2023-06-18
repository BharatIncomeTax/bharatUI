//Request Parameter
export const compoundingPeriod = 'compounding_period(int, required)';
export const principal = 'principal(int, required)';
export const interestRate = 'interest_rate(float, required)';
export const startDate = 'start_date(string, required)';
export const endDate = 'end_date(string, required)';
export const type = 'type(string, required)';

//Response Parameter
export const instrumentNo = 'InstrumentNo(int)';
export const sliceNo = 'SliceNo(int)';
export const startDate1 = 'StartDate(string)';
export const endDate1 = 'EndDate(string)';
export const days = 'Days(string)';
export const rate = 'Rate(float)';
export const amount = 'Amount(float)';
export const rowCount = 'RowCount(int)';
export const compoundingFlag = 'compounding_flag(string)';
export const specifiedPeriodPrincipal = 'principal(float)';
export const notionalPrincipal = 'notional_principal(int)';

//Request Parameter Description
export const compoundingPeriodInfo = "It refers to the frequency at which the interest on the deposite is calculated and added back to the principal amount. \n Permissible values: 12, 6, 4, 2, 1.\n 12 : Monthly \n 6 : Bi-Monthly \n 4 : Quarterly \n 2 : Half-Yearly \n 1 : Yearly";
export const principalInfo = 'It refers to the initial amount of money that you deposit into the fixed deposit account.';
export const interestRateInfo = 'It refers to the percentage at which the deposited amount earns interest over the duration of the deposit. It should be in {rate/100} format i.e. 0.0825 for 8.25%.';
export const startDateInfo = 'It refers to the date on which the FD account is opened and the deposit period begins. It should be in {MM/DD/YYYY} format i.e. "03/06/2023" for 6 June 2023.';
export const endDateInfo = 'It refers to the date on which the deposit period or tenure of the deposit comes to an end. It should be in {MM/DD/YYYY} format i.e. "07/06/2024" for 6 July 2023.';
export const typeInfo = 'It refers to different types of Cumulative Deposits supported by API Permissible values : "CDR" , "KVP" , "NSC" , "MSSC" , "TD01" , "TD02" , "TD03" ,"TD05" , "MIS" , "RDR". \n "CDR" : Cumulative Deposits Receipt \n "KVP" : Post-Office Kisan Vikas Patra \n "NSC" : Post-Office National Savings Certificate \n "MSSC" : Post-Office Mahila Samman Savings Certificate \n "TD01" : Post-Office Time Deposits for 1 year \n "TD02" : Post-Office Time Deposits for 2 years \n "TD03" : Post-Office Time Deposits for 3 years \n "TD05" : Post-Office Time Deposits for 5 years \n "MIS" : Post-Office Monthly Income Scheme \n "RD" : Post-Office Recurring Deposits \n "RDR" : Recurring Deposits Receipt';

//Response Parameter Description
export const instrumentNoInfo = 'It indicates which instrument that part refers to.';
export const sliceNoInfo = 'It indicates which slice that part refers to.';
export const startDate1Info = 'It refers to the date on which the FD account is opened and the deposit period begins. \n It will be in {MM-DD-YYYY} format i.e. "03-06-2023" for 6 June 2023.';
export const endDate1Info = 'It refers to the date on which the deposit period or tenure of the deposit comes to an end. \n It will be in {MM-DD-YYYY} format i.e. "07-06-2024" for 6 July 2023.';
export const daysInfo = 'Total Number of Days in that month.';
export const rateInfo = 'It refers to the daily-interest amount with according to principal of that month.';
export const amountInfo = 'It refers to the interest amount of your deposit for that month.';
export const rowCountInfo = 'No of records returned.';
export const compoundingFlagInfo = 'It is a flag that indicates whether the interest amount is compounded or not. \n It will be \'Y\' if interest amount is compounded for that month else \'N\'.';
export const specifiedPeriodPrincipalInfo = 'It refers to the amount of your principal with interest for that month.';
export const notionalPrincipalInfo = 'It refers to the interest amount of your deposit for that month.';
