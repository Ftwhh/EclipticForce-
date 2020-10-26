const leaders = [
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1462732292218-7QZS4M8S45GMPVRPQ8Q4/ke17ZwdGBToddI8pDm48kFMpOcZHlTq_w4NItl336vZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpyPcQQkQoF8OjpLejJ8lHZ_fXF4tKnwwkoE3vznSX7HeOE3zd7xpZRwa2TZaH9rsrk/andymiller.png?format=500w",
    name: "Andy Miller",
    professions: ["Co-Founder", "Co-CEO", "Sacramento Kings Co-Owner"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1572984065011-YG5201V7CD2OD0AWOCMS/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/h3cz.png?format=500w",
    name: "Hector  Rodriguez ",
    professions: ["Co-CEO"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577405722096-1TRXK2Y4F4YGOA99F6AO/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/brett.png?format=500w",
    name: "Brett Lautenbach",
    professions: ["President"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577405731432-G37OZ80X7SZ1B03LAC75/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/jaime.png?format=500w",
    name: "Jaime Cohenca",
    professions: ["General Manager"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577405753744-JE96WHPLLC20FK995ABI/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/grady+rains.png?format=500w",
    name: "Grady Rains",
    professions: ["Executive Producer"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1577405743634-D9J0BLKBB7IVW6SVVDFI/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/dave-swarts.png?format=500w",
    name: "David Swartz",
    professions: ["Chief Events Officer"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1462732293104-EHFMNZQ03PU6HTSYQLAI/ke17ZwdGBToddI8pDm48kFMpOcZHlTq_w4NItl336vZZw-zPPgdn4jUwVcJE1ZvWhW7QUl7Hlx1Ovi-Ue4YINkJFbgE-7XRK3dMEBRBhUpx0x0eE8ljIFPYTXlSYGsbYoQ4xckpZGHZkxlHsTdJM8HLPj-roBkipVBR8C5AjWbI/markmastrov.png?format=500w",
    name: "Mark Mastrov",
    professions: ["Co-Founder", "Sacramento Kings Co-Owner"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1464774716280-4S1FLYFCIL9DYQ052XC6/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/Alex-Rodriguez.png?format=750w",
    name: "Alex Rodriguez",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1464774139687-0Y4Z8R9GXPO313LSQTB6/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWxYb2krSYGNt8NUBfJA7VeEJFbgE-7XRK3dMEBRBhUpyG0Oi80fAaKpiicqq8Ky6U66w6YRJQddInDWtEd0tTUiKZlySKEmybK237y9z5olA/shaquille-o-neal.png?format=750w",
    name: "Shaquille O'Neal",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1464775728814-PAZWUZCUI28GG1BVAGDZ/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWhW7QUl7Hlx1Ovi-Ue4YINkJFbgE-7XRK3dMEBRBhUpwkLD3DBE4G7wE6yuYwEojq0efIZoSsg2s5zy--yPQgusZej9CxqlQAi8Gvb4Oe18Q/jimmy-rollins.png?format=750w",
    name: "Jimmy Rollins",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1496789400291-F1DW9R3KXJXI66J5R7SS/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/ryanhoward.png?format=750w",
    name: "Ryan Howard",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1506709931520-CD7J3DQYUJKJRMXYKIXD/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/jlo.png?format=750w",
    name: "Jennifer Lopez",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1506709939222-TGNYF91G69RWVO26KTAK/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/strahan.png?format=750w",
    name: "Michael Strahan",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1506709946767-INN37DR8VMTPVCHCH4U5/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/lynch.png?format=750w",
    name: "Marshawn Lynch",
    professions: ["Investor", "Advisor"],
  },
  {
    img:
      "https://images.squarespace-cdn.com/content/v1/56e0692bf699bb8546ef30d8/1525542337837-JAO823D5K9867DVNYNRG/ke17ZwdGBToddI8pDm48kCrFvaMn6e-7dPXhO9vBf8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw8mpz9Q7BByKQZv8fmleE2XqicQxpiot-A9sXBbDsOnmCrbq1HM_HA8FqpXe9pZp0/teiesto-web.png?format=750w",
    name: "Tiësto",
    professions: ["Investor", "Advisor"],
  },
];

export default leaders;
