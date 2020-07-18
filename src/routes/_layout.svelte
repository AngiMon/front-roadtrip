<script>
    import { fr, en } from '../../lang/translation';
    import { _ , locale, dictionary } from 'svelte-i18n';

	dictionary.set(fr);
    locale.set('fr');
</script>

<slot />