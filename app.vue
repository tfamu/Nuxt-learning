<script setup lang="ts">
import type {Member, City} from "@/interfaces";

//会員情報リストをステートから取得
useState<Map<number, Member>>(
  "memberList",
  (): Map<number, Member> => {
    const memberListInit = new Map<number, Member>();
    memberListInit.set(
      33456,
      {
        id: 33456,
        name: "山田太郎",
        email: "bow@example.com",
        points: 35,
        note: "初回入会特典あり。"
      }
    );
    memberListInit.set(
      47783,
      {
        id: 47783,
        name: "鈴木太郎",
        email: "mue@example.com",
        points: 53,
      }
    );
    return memberListInit;
  }
)

useState<Map<number, City>>(
  "cityList",
  ():Map<number, City> => {
    const cityListInit = new Map<number, City>;
  }
)

useHead({
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous"
    }
  ]
});
</script>

<template>
  <header>
    <h1>ルーティングサンプル</h1>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>