DECLARE
    CURSOR c1 IS
        SELECT CustomerID,
               FLOOR(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS AGE
        FROM Customers;
BEGIN
    FOR r IN c1 LOOP
        IF r.AGE > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = r.CustomerID;
        END IF;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Scenario 1 Completed');
END;
/

DECLARE
    CURSOR c2 IS
        SELECT CustomerID, Balance
        FROM Customers;
BEGIN
    FOR r IN c2 LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r.CustomerID;
        END IF;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Scenario 2 Completed');
END;
/

DECLARE
    CURSOR c3 IS
        SELECT c.Name, l.LoanID, l.EndDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r IN c3 LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || r.LoanID ||
            ' - ' || r.Name ||
            ' - Due ' || TO_CHAR(r.EndDate, 'DD-MON-YYYY')
        );
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Scenario 3 Completed');
END;
/