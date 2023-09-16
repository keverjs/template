# template
kever project template


## Usage

### Step.1
clone git repository or use template
```base
git clone https://github.com/keverjs/template.git
```

### Step.2
install dependencies
```base
pnpm install
```

### Step.3
run dev server
```base
pnpm run dev
```

### Step.4
access request
```base
curl --location http://127.0.0.1:8080/user/getuser\?name\=kever

response:
{
  errno: 0,
  errmsg: "",
  data: {
    name: "kever",
    age: 18
  }
}
```
