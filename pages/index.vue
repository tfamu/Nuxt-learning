<template>
    <h1>TOP</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>TOP</li>
        </ul>
    </nav>
    <section>
        <p>
            <NuxtLink v-bind:to="{name: 'member-memberList'}" >
                会員管理はこちら
            </NuxtLink>
        </p>
        <p>
            <NuxtLink v-bind:to="{name: 'layoutPractice'}">
                Layout 練習
            </NuxtLink>
        </p>
        <p>
            <NuxtLink v-bind:to="{name: 'layoutWithSlotName'}">
                Layout 練習, slot name つき
            </NuxtLink>
        </p>
    </section>
</template>