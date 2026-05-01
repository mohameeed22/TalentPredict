UPDATE candidate_test_results
SET fraud_flags = '{"score": 0.0, "severity": "LOW", "message": "Legacy array", "flags": []}'::jsonb
WHERE jsonb_typeof(fraud_flags) = 'array';

UPDATE fraud_cases
SET flags_json = '{"score": 0.0, "severity": "LOW", "message": "Legacy array", "flags": []}'::jsonb
WHERE jsonb_typeof(flags_json) = 'array';
