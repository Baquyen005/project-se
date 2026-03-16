# Example: Wallet Top-up Feature
- **Story:** As a customer, I want to top up my wallet via Credit Card so I can pay for orders.
- **AC:** - Success when payment gateway returns 'paid'.
    - Fail if amount < 10,000 VND.
    - Transaction must be logged in `wallet_logs` table.