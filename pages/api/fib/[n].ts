import type { NextApiRequest, NextApiResponse } from "next";

function fib(n: number) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { n } = req.query;
  if (Array.isArray(n) || isNaN(+n) || +n < 0 || +n > 30)
    return res.status(400).send("What the heck, my guy?");
  else return res.status(200).send({ fib: fib(+n) });
};
